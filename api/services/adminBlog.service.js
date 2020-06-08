const AdminBlog = require('../adminBlog/adminBlog.model').AdminBlog;


async function create(reqParam){
    let newReq = new AdminBlog(reqParam);
    await newReq.save();

    return AdminBlog.findOne({ _id: newReq._id });
}


async function getAll() {
    return await AdminBlog.find({});
}


async function getOne(_id) {
    return AdminBlog.findById(_id);
}


async function update(id, reqParam) {
    reqParam.updatedAt = new Date();
    let getReq = await AdminBlog.findById(id);

    if (!getReq) throw 'getReq not Found';

    Object.assign(getReq, reqParam);
    await getReq.save();

    return AdminBlog.findById(id);
}


async function _delete(id) {
    await AdminBlog.deleteOne({_id: id});
}


module.exports = { create, getAll, getOne, update, delete: _delete };
