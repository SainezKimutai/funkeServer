const clientProfileService = require('../services/clientProfile.service');
const fileService = require('../services/file.service');


exports.create = (req, res, next) => {
    clientProfileService.create(req.body)
        .then(rsp => res.json(rsp))
        .catch(err => next(err));
};

exports.getAll = (req, res, next) => {
    clientProfileService.getAll()
        .then(rsps => { res.json(rsps);  })
        .catch(err => next(err));
};

exports.getOne = (req, res, next) => {
    clientProfileService.getOne(req.params.id)
            .then(rsp => rsp ? res.json(rsp): res.sendStatus(404))
            .catch(err => next(err));
};

exports.getByUserId = (req, res, next) => {
    clientProfileService.getByUserId(req.params.id)
            .then(rsp => rsp ? res.json(rsp): res.sendStatus(404))
            .catch(err => next(err));
};

exports.update = (req, res, next) => {
    clientProfileService.update(req.params.id, req.body)
        .then((rsp)=> {res.json(rsp);})
        .catch(err => next(err));
};

exports.delete = (req, res, next) => {
    clientProfileService.delete(req.params.id)
        .then(()=> {res.json({});})
        .catch(err => next(err));
};
exports.uploadClientImage = (req, res, next) => {
  fileService.uploadClientImage(req)
    .then((e) => (res.json(e)))
    .catch(err => {res.sendStatus(401); console.log(err)})
}

exports.removeClientImage = (req, res, next) => {
  fileService.removeClientImage(req.params.name)
    .then(()=> res.json({}))
    .catch(err => next(err));
}
