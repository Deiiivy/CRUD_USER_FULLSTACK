const userModel = require('../models/userModel')

const getUser = async (req,res) => {
    try {
        const users = await userModel.find()
        res.json(users)
    } catch (error) {
        console.log('error al obtener usuarios');
        res.status(500).json({ error: "error al obtener usuarios"})
    }
}

const createUser = async (req,res) => {
    try {
        const {name, lastName, age, phone, email} = req.body
        const newUser = new userModel({
            name:name,
            lastName:lastName,
            age:age,
            phone:phone,
            email:email
        })
        res.send('User created success')
        await newUser.save()
    } catch (error) {
        console.log('error al crear usuario');
        res.status(500).json({ error: "error al crear usuario"})
    }
}

const getUserById = async(req,res) => {
    const users = await userModel.findById(req.params.id)
    res.json(users)
}

const updateUser = async(req,res) => {
   try {
    const {name, lastName, age, phone, email} = req.body
    await userModel.findByIdAndUpdate(req.params.id, {
        name,
        lastName,
        age,
        phone,
        email
    })
    res.json({message: "user updated success"})
   } catch (error) {
    console.log('error al actualizar usuario');
    res.status(500).json({error: "error al actualizar usuario"})
   }
}

const deleteUser = async(req,res) => {
    try {
        await userModel.findByIdAndDelete(req.params.id)
        res.json({message: "user deleted success"})
    } catch (error) {
        console.log('error al eliminar usuario');
        res.status(500).json({error: "error al eliminar usuario"})
    }
}

module.exports = {getUser, createUser, getUserById, updateUser, deleteUser }