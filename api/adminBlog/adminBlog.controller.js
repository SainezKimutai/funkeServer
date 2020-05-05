const adminBlogService = require('../services/adminBlog.service');
const fileService = require('../services/file.service');


exports.create = (req, res, next) => {
    adminBlogService.create(req.body)
        .then(rsp => res.json(rsp))
        .catch(err => next(err));
};

exports.getAll = (req, res, next) => {
    adminBlogService.getAll()
        .then(rsps => { res.json(rsps);  })
        .catch(err => next(err));
};

exports.getOne = (req, res, next) => {
    adminBlogService.getOne(req.params.id)
            .then(rsp => rsp ? res.json(rsp): res.sendStatus(404))
            .catch(err => next(err));
};

exports.update = (req, res, next) => {
    adminBlogService.update(req.params.id, req.body)
        .then((rsp)=> {res.json(rsp);})
        .catch(err => next(err));
};

exports.delete = (req, res, next) => {
    adminBlogService.delete(req.params.id)
        .then(()=> {res.json({});})
        .catch(err => next(err));
};

exports.uploadBlogImage = (req, res, next) => {
  fileService.uploadBlogImage(req)
    .then((e) => (res.json(e)))
    .catch(err => {res.sendStatus(401); console.log(err)})
}

exports.removeBlogImage = (req, res, next) => {
  fileService.removeBlogImage(req.params.name)
    .then(()=> res.json({}))
    .catch(err => next(err));
}
