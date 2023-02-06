const express = require("express")
const router = express.Router()
const autControler = require('../controllers/authController')
router.post("/auth/login",autControler.login);
router.post("/auth/signup",autControler.register)

module.exports = router
