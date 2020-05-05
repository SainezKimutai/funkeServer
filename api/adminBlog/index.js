const express = require('express');

const controller = require('./adminBlog.controller');
const router = express.Router();

router.post('/create', controller.create);
router.get('/getAll', controller.getAll);
router.get('/getOne/:id', controller.getOne);
router.put('/update/:id', controller.update);
router.delete('/delete/:id', controller.delete);
router.post('/uploadBlogImage', controller.uploadBlogImage);
router.delete('/removeBlogImage/:name', controller.removeBlogImage);

module.exports = router;
