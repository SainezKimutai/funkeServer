const clientBlogService = require('../services/clientBlog.service');


exports.create = (req, res, next) => {
    clientBlogService.create(req.body)
        .then(rsp => res.json(rsp))
        .catch(err => next(err));
};

exports.getAll = (req, res, next) => {
    clientBlogService.getAll()
        .then(rsps => { res.json(rsps);  })
        .catch(err => next(err));
};

exports.getOne = (req, res, next) => {
    clientBlogService.getOne(req.params.id)
        .then(rsp => rsp ? res.json(rsp): res.sendStatus(404))
        .catch(err => next(err));
};

exports.update = (req, res, next) => {
    clientBlogService.update(req.params.id, req.body)
        .then((rsp)=> {res.json(rsp);})
        .catch(err => next(err));
};

exports.delete = (req, res, next) => {
    clientBlogService.delete(req.params.id)
        .then(()=> {res.json({});})
        .catch(err => next(err));
};
