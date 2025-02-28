           function mouseOver (){
            submit.style.background ="blue"
            submit.style.color = "white";
           }

           function mouseOut(){
            Submit.style.background ="pink";
            Submit.style.color = "lightblue";
           }


           document.getElementById("fullname").onchange = function()
           {changeToCapital()} 
           function changeToCapital(){
            var fname = document.getElementById("fullname");
            fname.value = fname.value.toUpperCase();
           }