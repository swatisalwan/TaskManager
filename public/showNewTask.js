function fetchTasks(done)
{
    $.get('/todos',function(data){
        done(data)
    })
}

function fetchTaskById(id,done)
{

    $.get('/todos/:id',function(data){
        done(data)
    })
}

function addTask(task,description,date,priority,status)
{
  $.post('/todos',{
    task:task,
    description:description,
    date:date,
    priority:priority,
    status:status

  },function(data){
    done(data)
})
}

function showNewTask (task){
    return $(`
    <div class ="col-4 card mx-2 p-4">
    <b> ${task.task}</b>
    <div class="row">
      Description : ${task.description}
    </div>

    <div class="row">
       Status :   ${task.status}
    </div>
    
    <div class="row">
      Priority :   ${task.priority}
    </div>
   
   <div class="row">
    Due Date :   ${task.date}
    </div>

   <button class="col btn btn-primary m-3">Show Notes</button>
  
  </div>`
  )

}


function sortByPriority(fetchedData)
{
    let taskList=$('#taskList')
    fetchedData.sort(function(a,b)
    {

        apriority=a.priority.toLowerCase()
        bpriority=b.priority.toLowerCase()
        return ((apriority=='high') ? -1 : 1 );
       
    })
    for(task of fetchedData)
    {
          taskList.append(showNewTask(task))
    }
    
   
} 

function sortById(fetchedData)
{
    let taskList=$('#taskList')
    taskList.empty()
    for(task of fetchedData)
    {
       taskList.append(showNewTask(task))
    }
    
}