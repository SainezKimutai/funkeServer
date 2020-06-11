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
  var result = new Date(date);
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

            res.json({allSubscriptions: AllScriptionRevevue, activeSubscription: ActiveScriptionRevevue, allKits: AllKitsRevevue})
          }
          getRevenueFunction();
        })
        .catch(err => next(err));
};
