const express = require("express")
const router = express()
const controller = require("../controllers/link-controller")

router.post("/", controller.CreateLink)
router.post("/:id", controller.Authenticate)
module.exports = router