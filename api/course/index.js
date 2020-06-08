const express = require('express');

const controller = require('./course.controller');
const router = express.Router();

router.post('/create', controller.create);
router.get('/getAll', controller.getAll);
router.get('/getOne/:id', controller.getOne);
router.get('/getAllByGrade/:id', controller.getAllByGrade);
router.put('/update/:id', controller.update);
router.delete('/delete/:id', controller.delete);
router.post('/uploadCourseImage', controller.uploadCourseImage);
router.delete('/removeCourseImage/:name', controller.removeCourseImage);
module.exports = router;
