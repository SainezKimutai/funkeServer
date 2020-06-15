var express = require('express');

var controller = require('./users.controller');
var router = express.Router();

router.get('/getAll', controller.getAll);
router.get('/getOne/:id', controller.getOne);
router.post('/login', controller.login);
router.post('/register', controller.create);
router.post('/sendCode', controller.sendCode);
router.post('/resetPasswordCode', controller.resetPasswordCode);
router.put('/update/:id', controller.update);
router.put('/updateByEmail/:email', controller.updateByEmail);
router.delete('/delete/:id', controller.delete);
router.delete('/deleteAll', controller.deleteAll);

router.post('/mobilePayment', controller.mobilePayment);
router.post('/confirmMobilePayment', controller.confirmMobilePayment);

module.exports = router;
