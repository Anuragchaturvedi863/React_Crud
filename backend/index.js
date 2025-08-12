const express = require("express")
const app = express()
const StuRoute = require("./routes/stuRoute")
const mongoose = require("mongoose")
const bodyparser = require('body-parser')
const cors = require("cors");

mongoose.connect("mongodb+srv://anuragc227:I0FAqmdSC2QQZYif@cluster0.b1evbop.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("DB Connected Succesfully")
})

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors());

// use ke pehle ye sab kaam kar liya karo
app.use("/students", StuRoute)

app.listen(8000, (req, res)=>{
    console.log("Server run on 8000 port")
})