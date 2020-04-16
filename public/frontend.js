$(function(){

   
    
    let newTask=$('#newTask')
    let description=$('#description')
    let date=$('#date')
    let status=$('#status')
    let priority= $('#priority')
    let taskList=$('#taskList')
    var fetchedData
    
        fetchTasks(function(tasks){
            fetchedData=tasks;
            taskList.empty()
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
       console.log(id.val())
        fetchTaskById(id.val(),function(task)
        {   
            taskList.empty()
            taskList.append(showNewTask(task))
            
        })

    })
    

    $('#searchNotesId').click(function()
    {
       let id=$("#search")
       let taskList=$('#taskList')
       taskList.empty()
       fetchNotesById(id.val(),function(task)
        {   
            
            taskList.append(showNewTask(task))
            
        })

    })
    
    // Default Date Feature
    var currentdate = new Date();
    currentdate.setDate(currentdate.getDate() + 1);
    var tomorrow = currentdate.toJSON().slice(0,10);
    document.getElementById('date').value = tomorrow

   
}) 

