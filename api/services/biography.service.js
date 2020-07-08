const Biography = require('../biography/Biography.model').Biography;


async function create(reqParam){
    let newReq = new Biography(reqParam);
    newReq.createdAt = new Date();
    await newReq.save();

    return Biography.findOne({ _id: newReq._id });
}


async function getAll() {
    return await Biography.find({});
}


async function getOne(_id) {
    return Biography.findById(_id);
}


async function getAllByGrade(id) {
    return await Biography.find({gradeId: id });
}


async function update(id, reqParam) {
    reqParam.updatedAt = new Date();
    let getReq = await Biography.findById(id);

    if (!getReq) throw 'getReq not Found';

    Object.assign(getReq, reqParam);
    await getReq.save();

    return Biography.findById(id);
}


async function _delete(id) {
    await Biography.deleteOne({_id: id});
}


module.exports = { create, getAll, getOne, getAllByGrade, update, delete: _delete };
