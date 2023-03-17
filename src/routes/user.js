const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");
const admin = require("../middlewares/admin");



router.get("/login",controller.login)
router.post("/login", admin, controller.admin)


module.exports = router