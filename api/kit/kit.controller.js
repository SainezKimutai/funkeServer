const kitService = require('../services/kit.service');
const fileService = require('../services/file.service');


exports.create = (req, res, next) => {
    kitService.create(req.body)
        .then(rsp => res.json(rsp))
        .catch(err => next(err));
};

exports.getAll = (req, res, next) => {
    kitService.getAll()
        .then(rsps => { res.json(rsps);  })
        .catch(err => next(err));
};

exports.getOne = (req, res, next) => {
    kitService.getOne(req.params.id)
            .then(rsp => rsp ? res.json(rsp): res.sendStatus(404))
            .catch(err => next(err));
};

exports.update = (req, res, next) => {
    kitService.update(req.params.id, req.body)
        .then((rsp)=> {res.json(rsp);})
        .catch(err => next(err));
};

exports.delete = (req, res, next) => {
    kitService.delete(req.params.id)
        .then(()=> {res.json({});})
        .catch(err => next(err));
};

exports.uploadKitImage = (req, res, next) => {
  fileService.uploadKitImage(req)
    .then((e) => (res.json(e)))
    .catch(err => {res.sendStatus(401); console.log(err)})
}

exports.removeKitImage = (req, res, next) => {
  fileService.removeKitImage(req.params.name)
    .then(()=> res.json({}))
    .catch(err => next(err));
}
