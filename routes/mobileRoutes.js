// user.js
const express = require('express');
const { register, login } = require('../controllers/mobile/AuthMobileController.js');
const { getUserProfile } = require('../controllers/mobile/ProfileController.js');
const { getAllMerchandise, getMerchandiseById } = require('../controllers/mobile/MerchandiseController.js');
const { getAllMessageByUserId, sendMessage } = require('../controllers/mobile/MessageController.js');
const authentication = require('../middlewares/auth.js');

const router = express.Router();

router.post("/auth/register", register);
router.post("/auth/login", login);
router.get("/user/profile", authentication,  getUserProfile);
router.get("/marchandise", getAllMerchandise);
router.get("/marchandise/:id", getMerchandiseById);
router.get("/messages/", authentication, getAllMessageByUserId);
router.post("/message", authentication, sendMessage);

module.exports = router;