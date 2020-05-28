const express = require('express');

const controller = require('./clientProfile.controller');
const router = express.Router();

router.post('/create', controller.create);
router.get('/getAll', controller.getAll);
router.get('/getOne/:id', controller.getOne);
router.get('/getByUserId/:id', controller.getByUserId);
router.put('/update/:id', controller.update);
router.delete('/delete/:id', controller.delete);
router.post('/uploadClientImage', controller.uploadClientImage);
router.delete('/removeClientImage/:name', controller.removeClientImage);


module.exports = router;
