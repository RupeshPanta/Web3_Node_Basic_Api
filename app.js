const express = require('express')
const mongoose = require('mongoose')
const port = 9000
const url = 'mongodb://localhost:27017/Professor_Record'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('Successfully connected to the database')
})

app.use(express.json())

const professorRouter = require('./routes/professors')
app.use('/professors',professorRouter)

//app.listen(3000, () => {
    //console.log('Server has started and is listening')
//})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
  })