const Order = require('../order/order.model').Order;


async function create(reqParam){
    let newReq = new Order(reqParam);
    await newReq.save();

    return Order.findOne({ _id: newReq._id });
}


async function getAll() {
    return await Order.find({});
}


async function getOne(_id) {
    return Order.findById(_id);
}


async function update(id, reqParam) {
    reqParam.updatedAt = new Date();
    let getReq = await Order.findById(id);

    if (!getReq) throw 'getReq not Found';

    Object.assign(getReq, reqParam);
    await getReq.save();

    return Order.findById(id);
}


async function _delete(id) {
    await Order.deleteOne({_id: id});
}


module.exports = { create, getAll, getOne, update, delete: _delete };
