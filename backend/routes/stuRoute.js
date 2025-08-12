const express = require("express")
const route = express.Router()
const StuController = require("../controllers/stuController")

route.post("/save", StuController.stuSave)
route.get("/display", StuController.stuDisplay)
route.get("/updateshow", StuController.stuUpdateShow)
route.delete("/delete/:id", StuController.dataDelete)
route.get("/datashow", StuController.dataShow)
route.post("/editsave", StuController.editSave)
route.post("/search", StuController.searchData)

module.exports=route