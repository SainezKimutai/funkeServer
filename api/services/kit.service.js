const Kit = require('../kit/kit.model').Kit;


async function create(reqParam){
    let newReq = new Kit(reqParam);
    await newReq.save();

    return Kit.findOne({ _id: newReq._id });
}


async function getAll() {
    return await Kit.find({});
}


async function getOne(_id) {
    return Kit.findById(_id);
}


async function update(id, reqParam) {
    reqParam.updatedAt = new Date();
    let getReq = await Kit.findById(id);

    if (!getReq) throw 'getReq not Found';

    Object.assign(getReq, reqParam);
    await getReq.save();

    return Kit.findById(id);
}


async function _delete(id) {
    await Kit.deleteOne({_id: id});
}


module.exports = { create, getAll, getOne, update, delete: _delete };
