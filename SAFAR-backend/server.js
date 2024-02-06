const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bycrypt = require('bcrypt')

const app = express()

app.use(express.json())

app.use(cors())

mongoose.connect("mongodb+srv://user_123:abhijit123@cluster0.ptcr1fz.mongodb.net/UserInfo")


app.listen('3002', () => {
    console.log("server connected and running")
})

