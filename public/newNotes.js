function showNotes(){
    let TaskList = $('#taskList')
    fetchNotes(function(product){
        TaskList.empty()
            TaskList.append(createNoteCard(product))
    })
}

// How to show Notes Card
function createNoteCard(task){
    return $(`<div id=box><b>Notes : ${task[0].notes}</div>`)
}

//Fetch notes from Api
function fetchNotes(done){
    let notes=$('#search').val()
    $.get('/todos/'+ notes +'/notes', function(data){
       done(data);
    })
}

