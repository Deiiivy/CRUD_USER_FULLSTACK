const express = require('express')
const route = express.Router()
const {getUser, createUser, getUserById, updateUser, deleteUser } = require('../controllers/userController')

route.get('/getuser', getUser)
route.post('/create', createUser)
route.get('/getuserid/:id', getUserById)
route.put('/update/:id', updateUser)
route.delete('/delete/:id', deleteUser)


module.exports = route
