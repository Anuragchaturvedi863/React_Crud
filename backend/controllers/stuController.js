const { response } = require("express")
const StuModel = require("../models/stuModels")

const stuSave = async(req, res)=>{
    const { rollno, name, city, fees } = req.body
    const Student = await StuModel.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    })
    res.send("data save!!")
}

const stuDisplay = async(req, res)=>{
    const Student = await StuModel.find()
    res.send(Student)
}
const stuUpdateShow = async(req, res)=>{
    const Student = await StuModel.find()
    res.send(Student)
}

const dataDelete = async(req, res)=>{
    const {id} = req.params
    await StuModel.findByIdAndDelete(id)
    res.send("Record Succesfully Deleted")
}

const dataShow = async(req, res)=>{
    const {id} = req.query
    const Student = await StuModel.findById(id)
    console.log(Student)
    res.send(Student)
}

const editSave= async(req, res)=>{
   const {_id, rollno, name, city, fees} =req.body
    const Student = await StuModel.findByIdAndUpdate(_id, {
        rollno: rollno,
        name:name,
        city:city,
        fees:fees
    })
    res.send("data successfully updated")
}

const searchData=async(req, res)=>{
    const {rollno} = req.body
    const Student = await StuModel.find({rollno:rollno})
    // console.log(rollno)
    res.send(Student)
}


module.exports = {
    stuSave,
    stuDisplay,
    stuUpdateShow,
    dataDelete,
    dataShow,
    editSave,
    searchData
    
}