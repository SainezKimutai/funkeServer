const express = require('express');

const controller = require('./stats.controller');
const router = express.Router();

router.get('/totalClients', controller.totalClients);
router.get('/ativeSubscriptions', controller.ativeSubscriptions);
router.get('/totalRevenue', controller.totalRevenue);
router.get('/contentSubscriptionRate', controller.contentSubscriptionRate);
router.get('/subscriptionMonthlyBasis', controller.subscriptionMonthlyBasis);


module.exports = router;
