const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
const {getContact,createContact} = require('./server/routes')

//get all contact list
app.get('/get/contact/list',getContact)

//create new contact 
app.post('/create/new/user',createContact)

app.listen(process.env.PORT,()=>{
    console.log('hello')
})
