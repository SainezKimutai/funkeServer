const express = require('express');

const controller = require('./lesson.controller');
const router = express.Router();

router.post('/create', controller.create);
router.get('/getAll', controller.getAll);
router.get('/getOne/:id', controller.getOne);
router.get('/getAllByCourse/:id', controller.getAllByCourse);
router.put('/update/:id', controller.update);
router.delete('/delete/:id', controller.delete);
router.post('/uploadLessonImage', controller.uploadLessonImage);
router.delete('/removeLessonImage/:name', controller.removeLessonImage);
router.post('/uploadLessonVideo', controller.uploadLessonVideo);
router.delete('/removeLessonVideo/:name', controller.removeLessonVideo);


module.exports = router;
