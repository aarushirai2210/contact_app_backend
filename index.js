const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

//get all contact list
app.get('/get/contact/list',getContact)

//create new contact 
app.post('/create/new/user',createContact)

app.listen(3001,()=>{
    console.log('hello')
})