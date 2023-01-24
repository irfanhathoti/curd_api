const express = require('express')
const addStudent = require('../controller/addStudent')
const deleteStudent = require('../controller/deleteStudent')
const getAllStudnets = require('../controller/getAllStudents')
const getStudent = require('../controller/getStudent')
const updateStudent = require('../controller/updateStudent')

const routes = express.Router()

routes.get('/',getAllStudnets)
routes.post('/addStudent',addStudent)
routes.delete('/:id',deleteStudent)
routes.get('/:id',getStudent)
routes.put('/:id/updateStudent',updateStudent)

module.exports = routes