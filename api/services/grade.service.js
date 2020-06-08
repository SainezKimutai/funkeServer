const Grade = require('../grade/grade.model').Grade;


async function create(reqParam){
    let newReq = new Grade(reqParam);
    await newReq.save();

    return Grade.findOne({ _id: newReq._id });
}


async function getAll() {
    return await Grade.find({});
}

async function getAllByCurriculum(id) {
    return await Grade.find({curriculumId: id });
}

async function getOne(_id) {
    return Grade.findById(_id);
}


async function update(id, reqParam) {
    reqParam.updatedAt = new Date();
    let getReq = await Grade.findById(id);

    if (!getReq) throw 'getReq not Found';

    Object.assign(getReq, reqParam);
    await getReq.save();

    return Grade.findById(id);
}


async function _delete(id) {
    await Grade.deleteOne({_id: id});
}


module.exports = { create, getAll, getAllByCurriculum, getOne, update, delete: _delete };
