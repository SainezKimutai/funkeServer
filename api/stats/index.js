const express = require('express');

const controller = require('./stats.controller');
const router = express.Router();

router.get('/totalClients', controller.totalClients);


module.exports = router;
