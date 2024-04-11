// user.js
const express = require('express');
const { getAllMessage } = require('../controllers/MessageController.js');

const router = express.Router();

router.get("/", getAllMessage);

module.exports = router;