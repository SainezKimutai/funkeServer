const lessonService = require('../services/lesson.service');
const fileService = require('../services/file.service');


exports.create = (req, res, next) => {
    lessonService.create(req.body)
        .then(rsp => res.json(rsp))
        .catch(err => next(err));
};

exports.getAll = (req, res, next) => {
    lessonService.getAll()
        .then(rsps => { res.json(rsps);  })
        .catch(err => next(err));
};

exports.getOne = (req, res, next) => {
    lessonService.getOne(req.params.id)
            .then(rsp => rsp ? res.json(rsp): res.sendStatus(404))
            .catch(err => next(err));
};

exports.update = (req, res, next) => {
    lessonService.update(req.params.id, req.body)
        .then((rsp)=> {res.json(rsp);})
        .catch(err => next(err));
};

exports.delete = (req, res, next) => {
    lessonService.delete(req.params.id)
        .then(()=> {res.json({});})
        .catch(err => next(err));
};
exports.uploadLessonImage = (req, res, next) => {
  fileService.uploadLessonImage(req)
    .then((e) => (res.json(e)))
    .catch(err => {res.sendStatus(401); console.log(err)})
}

exports.removeLessonImage = (req, res, next) => {
  fileService.removeLessonImage(req.params.name)
    .then(()=> res.json({}))
    .catch(err => next(err));
}
exports.uploadLessonVideo = (req, res, next) => {
  fileService.uploadLessonVideo(req)
    .then((e) => (res.json(e)))
    .catch(err => {res.sendStatus(401); console.log(err)})
}

exports.removeLessonVideo = (req, res, next) => {
  fileService.removeLessonVideo(req.params.name)
    .then(()=> res.json({}))
    .catch(err => next(err));
}
