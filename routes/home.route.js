const express = require("express")
const route = express.Router()
const Userinfo = require("../db/db.schemas")
const {readUsers} = require("./readUsers")
const {read1user} = require("./read1User")
const {deleteuser} = require("./deleteuser")
const {createuser} = require("./createuser")
const {updateuser} = require("./updateuser")

//users = READ api
route.get('/', readUsers)

//users = CREATE api
route.post('/',createuser)

//users = DELETE api (based on id)
route.delete('/:id',deleteuser)

//users = UPDATE api (based on id)
route.put('/:id',updateuser)

//users = READ sisngle  user api  (based on id)
route.get('/:id',read1user)




module.exports = route