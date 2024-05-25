const express = require('express');
const router = express.Router();
const { orderData } = require('../Controllers/OrderController');

router.post('/orderData', orderData);

module.exports = router;