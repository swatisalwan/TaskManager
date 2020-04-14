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
        fetchTasks(function(tasks){
        
            taskList.empty()
            fetchedData=tasks;
            sortByPriority(fetchedData)
        })
        
    }) 
    

   
    $('#addBtn').click(function()
    {
        
        addTask(newTask.val(),description.val(),date.val(),status.val(),priority.val())

    }) 


    $('#searchId').click(function()
    {
        
        fetchTaskById($("#search"),function(tasks)
        {   
            taskList.empty()
            for(task of fetchedData)
            {
                 taskList.append(showNewTask(task))
         }
        })

    }) 
    


    
});



  

