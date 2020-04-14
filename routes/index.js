const Task=require('../database').Task
const route=require('express').Router()

route.get('/todos', function(req,res,next)
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

route.post('/todos', function(req,res,next)
{
    Task.create({
        task:req.body.task,
        description:req.body.description,
        date:req.body.date,
        priority:req.body.priority,
        status:req.body.status

    })
    .then((tasks)=>{
        res.status(200).send(tasks)

    })
    .catch((err)=>{
        res.status(500).send({
            error:"Could Not Connect"
        })

    })

})





route.get('/todos/:id', (req, res) => {
    if (isNaN(Number(req.params.id))) {

        return res.status(400).send({

            error: 'Task Id Must be an Integer'

        })

    }
  
    Task.findByPk(req.params.id)
    .then( (task) => {
    res.status(201).send(task)
    }) .catch((err)=>{
        console.log(err);
        res.status(501).send({
            err: "Could not get task by given id"
            
        })
    })
  
})

route.patch('/todos/:id', function (req, res, next) {
    Tasks.update(
      {  date: req.body.date,
        status: req.body.status,
        priority: req.body.priority},

      {where: {id: req.params.id}}
    )
    .then(function(rowsUpdated) {
      res.json(rowsUpdated)
    })
    .catch(next)
   })

route.get('todos/:id/notes', function (req, res) {
   Tasks.findAll({
    where: {
        id: req.params.id //array
    },
    attributes: ['notes'], //object
}).then(function (list) {
    res.status(200).json(list);
})
   })

   route.patch('/:id/notes', function (req, res, next) {
    Tasks.update(
      {  Notes: req.body.notes,
    },

      {where: {id: req.params.id}}
    )
    .then(function(rowsUpdated) {
      res.json(rowsUpdated)
    })
    .catch(next)
   })




   exports=module.exports={
    
    route
}
