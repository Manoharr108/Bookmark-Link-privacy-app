const express = require("express")
const router = express()
const controller = require("../controllers/link-controller")

router.post("/Linkprotector/", controller.CreateLink)
router.post("/:id", controller.Authenticate)
module.exports = router