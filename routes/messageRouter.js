const express = require('express');
const { getAllMessage, getMessageById, updateMessageStatus } = require('../controllers/MessageController.js');

const router = express.Router();

router.get("/", getAllMessage);
router.get("/:id", getMessageById);
router.patch("/selected/:id", updateMessageStatus);

module.exports = router;