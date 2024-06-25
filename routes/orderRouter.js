const express = require('express');
const { getOrders } = require('../controllers/OrderController');

const router = express.Router();

router.get("/", getOrders);


module.exports = router;