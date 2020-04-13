function fetchTasks(done)
{
    $.get('/todos',function(data){
        done(data)
    })
}

function showNewTask (tasks){
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
      Prioriy :   ${task.priority}
    </div>
   
   <div class="row">
    Due Date :   ${task.date}
    </div>

   <button class="col btn btn-primary m-3">Show Notes</button>
  
  </div>`
  )

}

