const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRoutes = require('./routes/user')

const app = express()

app.use(express.json())
app.use(cors())

app.use("/manage/users", userRoutes)

const PORT = 3004

mongoose.connect('mongodb://127.0.0.1:27017/CRUD_USERS')

app.get("/", (req,res) => {
    res.send('Hola creando app')
})

app.listen(PORT, () =>{console.log( `server at run in the port: ${PORT}`);})