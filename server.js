const express=require('express')
const server=express()

server.use('/',express.static(__dirname+'/public'))
server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use('/',require('./routes').route)


process.env.port||8000
