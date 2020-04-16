function fetchTasks(done)
{
    $.get('/todos',function(data){
        done(data)
    })
}

function fetchTaskById(id,done)
{

  console.log(id)
    $.get("/todos/"+id,function(data){
        done(data)
    })
}

function fetchNotesById(id,done)
{

    $.get("/todos/notes"+id,function(data){
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
  let taskList=$('#taskList')
    return $(`
    <div class ="col-4 card mx-2 p-4" style="background-color: lavender;">
    <b> ${task.task}</b>
    
    <div class="row">
        Description : ${task.description}
    </div>
    <div class="row">
    Due Date :   ${task.date}
    </div>
    
    <div class="row">
    Priority :   ${task.priority}
    </div>
    <div class="row">
       Status :   ${task.status}
    </div>
    
    <button class="wow btn-primary">Show Notes</button>
    <div class="display">
    <form>
    <b>Notes: </b>
    <p >${task.id}</p>
    <p>${task.notes}</p>
   
   
        Add Notes: <input class="enterNote" type="text" >
       <button  type="submit"  class="updateNotes">Submit</button>
   </form>
  
</div>
   
  
  </div>`
  )

}
