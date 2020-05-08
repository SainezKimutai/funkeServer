const teacherService = require('../services/teacher.service');
const fileService = require('../services/file.service');

exports.create = (req, res, next) => {
    teacherService.create(req.body)
        .then(rsp => res.json(rsp))
        .catch(err => next(err));
};

exports.getAll = (req, res, next) => {
    teacherService.getAll()
        .then(rsps => { res.json(rsps);  })
        .catch(err => next(err));
};

exports.getOne = (req, res, next) => {
    teacherService.getOne(req.params.id)
            .then(rsp => rsp ? res.json(rsp): res.sendStatus(404))
            .catch(err => next(err));
};

exports.update = (req, res, next) => {
    teacherService.update(req.params.id, req.body)
        .then((rsp)=> {res.json(rsp);})
        .catch(err => next(err));
};

exports.delete = (req, res, next) => {
    teacherService.delete(req.params.id)
        .then(()=> {res.json({});})
        .catch(err => next(err));
};

exports.uploadTeacherImage = (req, res, next) => {
  fileService.uploadTeacherImage(req)
    .then((e) => (res.json(e)))
    .catch(err => {res.sendStatus(401); console.log(err)})
}

exports.removeTeacherImage = (req, res, next) => {
  fileService.removeTeacherImage(req.params.name)
    .then(()=> res.json({}))
    .catch(err => next(err));
}
