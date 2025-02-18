const express = require("express")
const userSignUp = require("../controllers/userSignUp")
const userSignIn = require("../controllers/userSignIn")

const router = express.Router()

//User Registration API Endpoint
router.post("/register", userSignUp)

//User Sign in API Endpoint
router.post("/signin", userSignIn)


module.exports = router