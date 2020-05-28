const ClientProfile = require('../clientProfile/clientProfile.model').ClientProfile;


async function create(reqParam){
    let newReq = new ClientProfile(reqParam);
    await newReq.save();

    return ClientProfile.findOne({ _id: newReq._id });
}


async function getAll() {
    return await ClientProfile.find({});
}


async function getOne(_id) {
    return ClientProfile.findById(_id);
}

async function getByUserId(id) {
    return await ClientProfile.findOne({userId: id });
}

async function update(id, reqParam) {
    let getReq = await ClientProfile.findById(id);

    if (!getReq) throw 'getReq not Found';

    Object.assign(getReq, reqParam);
    await getReq.save();

    return ClientProfile.findById(id);
}


async function _delete(id) {
    await ClientProfile.deleteOne({_id: id});
}


module.exports = { create, getAll, getOne, getByUserId, update, delete: _delete };
