const clientProfileService = require('../services/clientProfile.service');
const orderService = require('../services/order.service');

exports.totalClients = (req, res, next) => {
    clientProfileService.getAll()
        .then(AllClients => {
          res.json({totalClients: AllClients.length})
        })
        .catch(err => next(err));
};


async function userActiveSubscription(SubsItem) {
  let activeItems = 0;
  let ActiveSubscription = await SubsItem.filter((item) => {
      let expiryDate = new Date(item.expiryDate);
      let today = new Date();
      let remainingDays = ((expiryDate - today) / (1000 * 60 * 60 * 24)).toFixed(0);
      if (Number(remainingDays) === 0 || Number(remainingDays) > 0) {
        return true
      } else { return false}
  } ).map(e => e)

   await ActiveSubscription.forEach((item, i) => {
    let myActiveItems = Number(item.curriculums.length) + Number(item.grades.length) + Number(item.courses.length) + Number(item.lessons.length)
    activeItems = activeItems + myActiveItems
    });

   return activeItems;
}

exports.ativeSubscriptions = (req, res, next) => {
    clientProfileService.getAll()
        .then(AllClients => {
          let activeSubscription = 0;
           AllClients.forEach((SubsItem, i, arr) => {
             async function getSubsNumber () {
               let myNumber = await userActiveSubscription(SubsItem.subscription);
               activeSubscription = activeSubscription + myNumber
               if ( i === arr.length - 1) { res.json({totalSubscription: activeSubscription}) }
             }
             getSubsNumber();
          });
        })
        .catch(err => next(err));
};







function addDays(date, days) {
  let result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}





exports.totalRevenue = (req, res, next) => {
    orderService.getAll()
        .then(AllOrder => {
          async function getRevenueFunction () {
            let AllScriptionOrders = await AllOrder.filter((ord) => ord.purchasedItems.kits.length === 0 ).map(e => e);
            let ActiveScriptionOrders = await AllScriptionOrders.filter((ord) => {
                    let subscribedDate = ord.createdAt;
                    let expiryDate = addDays(subscribedDate, 90)
                    let today = new Date();
                    let remainingDays = ((expiryDate - today) / (1000 * 60 * 60 * 24)).toFixed(0);
                    if (Number(remainingDays) === 0 || Number(remainingDays) > 0) {
                      return true
                    } else { return false}
                } ).map(e => e)
            let AllKitsOrders = await AllOrder.filter((ord) => ord.purchasedItems.kits.length > 0 ).map(e => e);
            let AllScriptionRevevue = await AllScriptionOrders.reduce((a,b) => a + b.amountPayed, 0);
            let ActiveScriptionRevevue = await ActiveScriptionOrders.reduce((a,b) => a + b.amountPayed, 0);
            let AllKitsRevevue = await AllKitsOrders.reduce((a,b) => a + b.amountPayed, 0);

            res.json({allSubscriptions: AllScriptionRevevue, activeSubscriptions: ActiveScriptionRevevue, allKits: AllKitsRevevue})
          }
          getRevenueFunction();
        })
        .catch(err => next(err));
};








exports.contentSubscriptionRate = (req, res, next) => {
  orderService.getAll()
      .then(AllOrder => {
        async function getRevenueFunction () {
          let obj = {
            curriculum: 0,
            grade: 0,
            course: 0,
            lesson: 0
          }
          let AllScriptionOrders = await AllOrder.filter((ord) => ord.purchasedItems.kits.length === 0 ).map(e => e);
          AllScriptionOrders.forEach((item, i, arr) => {
              obj.curriculum = obj.curriculum + item.purchasedItems.curriculums.length
              obj.grade = obj.grade + item.purchasedItems.grades.length
              obj.course = obj.course + item.purchasedItems.courses.length
              obj.lesson = obj.lesson + item.purchasedItems.lessons.length

              if ( i === arr.length - 1) { res.json(obj) }
          });
          if (AllScriptionOrders.length === 0) {res.json(obj)}

        }
        getRevenueFunction();
      })
      .catch(err => next(err));
};


exports.clientSubscriptionRate = (req, res, next) => {
  clientProfileService.getAll()
      .then(AllClients => {
        res.json({totalClients: AllClients.length})
      })
      .catch(err => next(err));

};



exports.subscriptionMonthlyBasis = (req, res, next) => {
    orderService.getAll()
      .then(AllOrder => {
        let subArr = []
        let AllScriptionOrders = AllOrder.filter((ord) => ord.purchasedItems.kits.length === 0 ).map(e => e);
        AllScriptionOrders.forEach((orderItem, i, arr) => {
          let subObj = {
            subscriptionNumber : Number(orderItem.purchasedItems.curriculums.length) + Number(orderItem.purchasedItems.grades.length) + Number(orderItem.purchasedItems.courses.length) + Number(orderItem.purchasedItems.lessons.length),
            month : orderItem.createdAt.getMonth(),
            year : orderItem.createdAt.getFullYear(),
            date : orderItem.createdAt
          }
          subArr.push(subObj);
          if (i === arr.length - 1){ res.json(subArr) };
        });
        if ( AllScriptionOrders.length === 0){ res.json([]) };

      })
      .catch(err => next(err));

};
