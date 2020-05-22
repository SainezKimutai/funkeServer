const courseService = require('../services/course.service');


exports.create = (req, res, next) => {
    courseService.create(req.body)
        .then(rsp => res.json(rsp))
        .catch(err => next(err));
};

exports.getAll = (req, res, next) => {
    courseService.getAll()
        .then(rsps => { res.json(rsps);  })
        .catch(err => next(err));
};

exports.getOne = (req, res, next) => {
    courseService.getOne(req.params.id)
            .then(rsp => rsp ? res.json(rsp): res.sendStatus(404))
            .catch(err => next(err));
};

exports.getAllByGrade = (req, res, next) => {
    courseService.getAllByGrade(req.params.id)
        .then(rsp => rsp ? res.json(rsp): res.sendStatus(404))
        .catch(err => next(err));
};

exports.update = (req, res, next) => {
    courseService.update(req.params.id, req.body)
        .then((rsp)=> {res.json(rsp);})
        .catch(err => next(err));
};

exports.delete = (req, res, next) => {
    courseService.delete(req.params.id)
        .then(()=> {res.json({});})
        .catch(err => next(err));
};
