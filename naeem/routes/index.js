const express = require("express");
const userRouter = require("./user");
const profileRouter = require("./profile");

const router = express.Router();

router.use(userRouter);
router.use("/profile", profileRouter);

module.exports = router;
