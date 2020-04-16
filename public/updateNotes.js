function updateTask(){
    let area = $('#update')
    fetchById(function(task){
        area.empty()
        area.append(createUpdateArea(task))
    })
}

function fetchById(done){
    let id=$('#search')
    var c =id.val()
    $.get('/todos/'+c, function(data){
       done(data);
    })
}
function createUpdateArea(task){
    return $(`<div class="card text-center">
    <div class="card-header">
        <b>${task.task}</b>
    </div>
   <div class="card-body">
       <h5 class="card-title"><b>Update Due Date: <input type="date" id="dueDate"></h5>
       <p class="card-text"><b>Description: </b><i>${task.description} <i></p>
       <p class="card-text"><b>Update Priority: </b><input type="text" id="pri"></p>
       <p class="card-text"><b>Update Status: </b> 
        <input type="radio" id="completed" name="updateStatus" value="completed">
       <label for="competed">Completed</label>
       <input type="radio" id="incomplete" name="updateStatus" value="incomplete">
       <label for="incomplete">Incomplete</label><br></p>
       <button type="button" onclick="updateListItem()" id="b6" class="btn btn-outline-primary btn-sm">Update</button>
    </div>
   
</div><br><hr>`)
}

function updateListItem(){
    
    let date=$('#dueDate').val()
    let priority=$('#pri').val()

    let id=$('#search')
    var c =id.val()
    var ele = document.getElementsByName('updateStatus'); 
     var status;
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
                status=ele[i].value;
            } 
            console.log(status)
        sendUpdatedValue(c,date, priority, status)
    
}

function sendUpdatedValue(id, date, priority, status){
    var item={
        date:date,
        status:status,
        priority:priority,
    }
        return $.ajax({
            type: "Patch",
            url: "/todos/"+id,
            data: JSON.stringify(item),
            dataType: "json",
            contentType: 'application/json; charset=utf-8'
        });
    }