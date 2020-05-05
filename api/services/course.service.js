const Course = require('../course/course.model').Course;


async function create(reqParam){
    let newReq = new Course(reqParam);
    await newReq.save();

    return Course.findOne({ _id: newReq._id });
}


async function getAll() {
    return await Course.find({});
}


async function getOne(_id) {
    return Course.findById(_id);
}


async function update(id, reqParam) {
    let getReq = await Course.findById(id);

    if (!getReq) throw 'getReq not Found';

    Object.assign(getReq, reqParam);
    await getReq.save();

    return Course.findById(id);
}


async function _delete(id) {
    await Course.deleteOne({_id: id});
}


module.exports = { create, getAll, getOne, update, delete: _delete };
