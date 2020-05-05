var express = require('express');

var controller = require('./users.controller');
var router = express.Router();

router.get('/getAll', controller.getAll);
router.get('/getOne/:id', controller.getOne);
router.post('/login', controller.login);
router.post('/register', controller.create);
router.post('/sendCode', controller.sendCode);
router.put('/update/:id', controller.update);
router.delete('/delete/:id', controller.delete);
router.delete('/deleteAll', controller.deleteAll);

module.exports = router;
