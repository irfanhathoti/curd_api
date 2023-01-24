const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const connection = require('./database/db')
const routes = require('./routes/student_routes')

const app = express()

dotenv.config()
const PORT = process.env.PORT || 4001
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(bodyParser.json())
connection()

app.use('/api/v1',routes)

app.listen(PORT,()=>{
    console.log("server started at",PORT)
})