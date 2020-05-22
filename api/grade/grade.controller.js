const gradeService = require('../services/grade.service');


exports.create = (req, res, next) => {
    gradeService.create(req.body)
        .then(rsp => res.json(rsp))
        .catch(err => next(err));
};

exports.getAll = (req, res, next) => {
    gradeService.getAll()
        .then(rsps => { res.json(rsps);  })
        .catch(err => next(err));
};

exports.getOne = (req, res, next) => {
    gradeService.getOne(req.params.id)
        .then(rsp => rsp ? res.json(rsp): res.sendStatus(404))
        .catch(err => next(err));
};

exports.getAllByCurriculum = (req, res, next) => {
    gradeService.getAllByCurriculum(req.params.id)
        .then(rsp => rsp ? res.json(rsp): res.sendStatus(404))
        .catch(err => next(err));
};

exports.update = (req, res, next) => {
    gradeService.update(req.params.id, req.body)
        .then((rsp)=> {res.json(rsp);})
        .catch(err => next(err));
};

exports.delete = (req, res, next) => {
    gradeService.delete(req.params.id)
        .then(()=> {res.json({});})
        .catch(err => next(err));
};
