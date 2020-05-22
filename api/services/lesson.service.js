const Lesson = require('../lesson/lesson.model').Lesson;


async function create(reqParam){
    let newReq = new Lesson(reqParam);
    await newReq.save();

    return Lesson.findOne({ _id: newReq._id });
}


async function getAll() {
    return await Lesson.find({});
}


async function getOne(_id) {
    return Lesson.findById(_id);
}

async function getAllByCourse(id) {
    return await Lesson.find({courseId: id });
}

async function update(id, reqParam) {
    let getReq = await Lesson.findById(id);

    if (!getReq) throw 'getReq not Found';

    Object.assign(getReq, reqParam);
    await getReq.save();

    return Lesson.findById(id);
}


async function _delete(id) {
    await Lesson.deleteOne({_id: id});
}


module.exports = { create, getAll, getOne, getAllByCourse, update, delete: _delete };
