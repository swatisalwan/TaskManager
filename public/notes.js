function updateNote(){
    var show = document.getElementsByClassName("updateNotes") 
    
    let i;
    for (i = 0; i < show.length; i++) {
    
       show[i].addEventListener("click", function() {
           var input=this.previousElementSibling;
           var note= input.previousElementSibling;
           var id= note.previousElementSibling;
           var finalNote=note.innerHTML + " " + input.value
           var Id=id.innerHTML
           note.innerHTML= finalNote
            sendUpdatedNote(Id, finalNote)
        })
    }
    }
    
    function sendUpdatedNote(Id, finalNote){
        
        var item={
     notes:finalNote
        }
            return $.ajax({
                type: "Patch",
                url: "/todos/"+Id+"/notes",

                data: JSON.stringify(item),
                dataType: "json",
                contentType: 'application/json; charset=utf-8'
            });
        }
    
