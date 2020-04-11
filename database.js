const Sequelize = require('sequelize')

const db= new Sequelize({
    dialect:'sqlite',
    storage:__dirname +'/database.db',
    pool:{
        min:0,
        max:5
    }
})

const Task= db.define('tasks',{
    task:{
        type:Sequelize.STRING,
        allowNull:false
    },
    description:{
        type:Sequelize.STRING
    },
    date:{
        type:Sequelize.DATE,
    
    },
    priority:{
        type:Sequelize.STRING,
        defaultValue:'high'
    },
    status:{
        type:Sequelize.STRING,
        defaultValue:'incomplete'
    }

})

db.sync()
.then(()=>{
    console.log("Table is added")

})
.catch((err)=>{
    res.status(500).send({
        error:"Could Not Add Table"
    })

})
exports=module.exports={
    Task
}