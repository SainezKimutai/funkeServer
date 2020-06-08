const ClientBlog = require('../clientBlog/clientBlog.model').ClientBlog;


async function create(reqParam){
    let newReq = new ClientBlog(reqParam);
    await newReq.save();

    return ClientBlog.findOne({ _id: newReq._id });
}


async function getAll() {
    return await ClientBlog.find({});
}


async function getOne(_id) {
    return ClientBlog.findById(_id);
}


async function update(id, reqParam) {
    reqParam.updatedAt = new Date();
    let getReq = await ClientBlog.findById(id);

    if (!getReq) throw 'getReq not Found';

    Object.assign(getReq, reqParam);
    await getReq.save();

    return ClientBlog.findById(id);
}


async function _delete(id) {
    await ClientBlog.deleteOne({_id: id});
}


module.exports = { create, getAll, getOne, update, delete: _delete };
