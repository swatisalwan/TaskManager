$(function(){

    
    let newTask=$('#newTask')
    let description=$('#description')
    let date=$('#date')
    let status=$('#status')
    let priority=$('#priority')
    let taskList=$('#taskList')
    var fetchedData
    
        fetchTasks(function(tasks){
        
            taskList.empty()
            fetchedData=tasks;
            sortById(fetchedData)
        })
        
     
    
    $('#sortByPriority').click(function()
    {
            sortByPriority(fetchedData)
    })

    $('#sortByStatus').click(function()
    {
            sortByStatus(fetchedData)
    })

    $('#sortBydateL').click(function()
    {
            sortByNewer(fetchedData)
    })
    $('#sortBydateO').click(function()
    {
            sortByOlder(fetchedData)
    })
     
    $('#addBtn').click(function()
    {
      
        addTask(newTask.val(),description.val(),date.val(),priority.val(),status.val())

    }) 


    $('#searchId').click(function()
    {
        let id=$("#search")
       let taskList=$('#taskList')
        fetchTaskById(id.val(),function(task)
        {   
            taskList.empty()
            taskList.append(showNewTask(task))
           
        })

    })


}) 

