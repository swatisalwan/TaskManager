const Task=require('../database').Task
const route=require('express').Router()

route.get('/todos', function(req,res,next)
{
    Task.findAll()
    .then((tasks)=>{
        res.status(200).send(users)

    })
    .catch((err)=>{
        res.status(500).send({
            error:"Could Not Connect"
        })

    })

})

route.post('/todos', function(req,res,next)
{
    Task.findAll()
    .then((tasks)=>{
        res.status(200).send(tasks)

    })
    .catch((err)=>{
        res.status(500).send({
            error:"Could Not Connect"
        })

    })

})


exports=module.exports={
    
    route
}
