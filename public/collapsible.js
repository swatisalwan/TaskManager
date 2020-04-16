
// How to extend Show Notes


function collapsible(){
   
    var column = document.getElementsByClassName("wow");
    var i;
    console.log(column.length)
    for (i = 0; i < column.length; i++) {
      column[i].addEventListener("click", function() {
        
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
    }