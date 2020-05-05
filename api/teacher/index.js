const express = require('express');

const controller = require('./teacher.controller');
const router = express.Router();

router.post('/create', controller.create);
router.get('/getAll', controller.getAll);
router.get('/getOne/:id', controller.getOne);
router.put('/update/:id', controller.update);
router.delete('/delete/:id', controller.delete);
router.post('/uploadTeacherImage', controller.uploadTeacherImage);
router.delete('/removeTeacherImage/:name', controller.removeTeacherImage);

module.exports = router;
