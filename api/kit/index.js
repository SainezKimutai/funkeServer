const express = require('express');

const controller = require('./kit.controller');
const router = express.Router();

router.post('/create', controller.create);
router.get('/getAll', controller.getAll);
router.get('/getOne/:id', controller.getOne);
router.put('/update/:id', controller.update);
router.delete('/delete/:id', controller.delete);
router.post('/uploadKitImage', controller.uploadKitImage);
router.delete('/removeKitImage/:name', controller.removeKitImage);

module.exports = router;
