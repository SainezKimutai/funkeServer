const orderService = require('../services/order.service');
const userService = require('../services/user.service');
const kitService = require('../services/kit.service');
const clientProfileService = require('../services/clientProfile.service');

exports.create = (req, res, next) => {
    orderService.create(req.body)
        .then(rsp => res.json(rsp))
        .catch(err => next(err));
};

exports.getAll = (req, res, next) => {
    orderService.getAll()
        .then(rsps => { res.json(rsps);  })
        .catch(err => next(err));
};

exports.getOne = (req, res, next) => {
    orderService.getOne(req.params.id)
        .then(rsp => rsp ? res.json(rsp): res.sendStatus(404))
        .catch(err => next(err));
};

exports.update = (req, res, next) => {
    orderService.update(req.params.id, req.body)
        .then((rsp)=> {res.json(rsp);})
        .catch(err => next(err));
};

exports.delete = (req, res, next) => {
    orderService.delete(req.params.id)
        .then(()=> {res.json({});})
        .catch(err => next(err));
};

exports.getKitsOrder = (req, res, next) => {
  orderService.getAll()
      .then(AllOrder => {
        let getKitsOrder = AllOrder.filter((ord) => ord.purchasedItems.kits.length > 0).map(e => e);

        let OrderArray = [];

        getKitsOrder.forEach((orderItem, i, arr) => {
          userService.getOne(orderItem.userId)
            .then(user => {
              let orderObject = {
                orderId: orderItem._id,
                userId: orderItem.userId,
                clientName: `${user.firstName} ${user.lastName}`,
                clientEmail: user.email,
                amountPayed: orderItem.amountPayed,
                datePurchased: orderItem.datePurchased,
                kitsDelivered: orderItem.kitsDelivered,
                kits: []
              }
              orderItem.purchasedItems.kits.forEach((kitId, i2, arr2) => {
                kitService.getOne(kitId)
                  .then(kit => {
                      orderObject.kits.push(kit)
                      if (i2 === arr2.length - 1){
                        OrderArray.push(orderObject)
                        if ( i === arr.length - 1 ){ res.json(OrderArray); }
                      }
                   })
                  .catch(err => next(err));
              });
            })
            .catch(err => next(err));
        });
      })
      .catch(err => next(err));
};







exports.updateKitsDelivery = (req, res, next) => {
    orderService.update(req.body.orderId, {kitsDelivered: true})
        .then((rsp)=> {
          clientProfileService.getByUserId(req.body.userId)
                  .then(clientProfile => {
                    clientProfile.paidKits.forEach((itemKit, i, arr) => {
                      if ( String(itemKit.orderId) === String(req.body.orderId)) {
                        itemKit.kitsDelivered = true;
                        console.log(itemKit);
                      }
                      if (i === arr.length - 1) {

                        clientProfileService.update(clientProfile._id, clientProfile)
                            .then((rsp)=> {res.json(rsp);})
                            .catch(err => next(err));
                      }
                    });
                  })
                  .catch(err => next(err));
        })
        .catch(err => next(err));
};
