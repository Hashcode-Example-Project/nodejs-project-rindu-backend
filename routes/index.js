const express = require('express');
const userRouter = require('./userRoutes.js');
const mobileRouter = require('./mobileRoutes.js');
const messageRouter = require('./messageRouter.js');

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Main Route Success" });
});

router.use("/users", userRouter);
router.use("/messages/", messageRouter)
router.use("/mobile", mobileRouter);


module.exports = router;
