const express = require('express');
const { default: mongoose } = require('mongoose');
const { schema } = require('../model/model');
const router = express.Router()
const Student = require('../model/model');

//Post Method
router.post('/saveStudent', async (req, res) => {
    // res.send('Post API')
     console.log(req.body);
    const data = new Student({
        name: req.body.name,
        e_mail: req.body.e_mail,
        phone_no: req.body.phone_no,
        address: req.body.address,
        pin_code: req.body.pin_code
    })

    try {
        const dataToSave =await data.save();
        console.log(dataToSave)
        res.status(200).json(dataToSave);
    }
    catch(error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/getAll',async (req, res) => {
    // res.send('Get All API')
    try{
        const data = await Student.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    // res.send('Get by ID API')
    // res.send(req.params.id)
    try {
        const data = await Student.findById(req.params.id);
        res.json(data)
    }
    catch(error) {
        res.status(500).json({message: error.message})
    }
})

//update by ID Method
router.patch('/update/:id', async (req, res) => {
    // res.send('Update by ID API')
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = {new: true};

        const result = await Student.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch(error) {
        res.status(400).json({message: error.message})
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    // res.send('Delete by ID API')
    try {
        const id = req.params.id;
        const data = await Student.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch(error) {
        res.status(400).json({ message: error.message })
    }
})


module.exports = router;
