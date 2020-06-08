const Teacher = require('../teacher/teacher.model').Teacher;


async function create(reqParam){
    let newReq = new Teacher(reqParam);
    await newReq.save();

    return Teacher.findOne({ _id: newReq._id });
}


async function getAll() {
    return await Teacher.find({});
}


async function getOne(_id) {
    return Teacher.findById(_id);
}


async function update(id, reqParam) {
    reqParam.updatedAt = new Date();
    let getReq = await Teacher.findById(id);

    if (!getReq) throw 'getReq not Found';

    Object.assign(getReq, reqParam);
    await getReq.save();

    return Teacher.findById(id);
}


async function _delete(id) {
    await Teacher.deleteOne({_id: id});
}


module.exports = { create, getAll, getOne, update, delete: _delete };
