const Curriculum = require('../curriculum/curriculum.model').Curriculum;


async function create(reqParam){
    let newReq = new Curriculum(reqParam);
    await newReq.save();

    return Curriculum.findOne({ _id: newReq._id });
}


async function getAll() {
    return await Curriculum.find({});
}


async function getOne(_id) {
    return Curriculum.findById(_id);
}


async function update(id, reqParam) {
    let getReq = await Curriculum.findById(id);

    if (!getReq) throw 'getReq not Found';

    Object.assign(getReq, reqParam);
    await getReq.save();

    return Curriculum.findById(id);
}


async function _delete(id) {
    await Curriculum.deleteOne({_id: id});
}


module.exports = { create, getAll, getOne, update, delete: _delete };
