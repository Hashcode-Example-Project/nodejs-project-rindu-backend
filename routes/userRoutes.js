// user.js
const express = require('express');
const { getAllUsers } = require('../controllers/UserController.js');

const router = express.Router();

router.get("/", getAllUsers);

module.exports = router;