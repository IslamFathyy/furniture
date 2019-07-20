
var all     = document.getElementById('all'),
    living  = document.getElementById('living'),
    bed = document.getElementById('bed'),
    dinning = document.getElementById('dinning'),
    myitems  = document.getElementsByClassName("f");


living.addEventListener("click",function(){
    
    for(var i=0 ;i<myitems.length;i++){
        var attr = myitems[i].getAttribute("id");
        if(attr == "living"){
            myitems[i].style.display="block";
        }
        else{
            myitems[i].style.display="none";
        }
    }
})

bed.addEventListener("click",function(){
    
    for(var i=0 ;i<myitems.length;i++){
        var attr = myitems[i].getAttribute("id");
        if(attr == "bed"){
            myitems[i].style.display="block";
        }
        else{
            myitems[i].style.display="none";
        }
    }
})

dinning.addEventListener("click",function(){
    
    for(var i=0 ;i<myitems.length;i++){
        var attr = myitems[i].getAttribute("id");
        if(attr == "dinning"){
            myitems[i].style.display="block";
        }
        else{
            myitems[i].style.display="none";
        }
    }
})

all.addEventListener("click",function(){
    
    for(var i=0 ;i<myitems.length;i++){
    
            myitems[i].style.display="block";
        }
    }
)

/*-------------------------------------------------------------------------------*/


/*------------------------------------------------------------------------------------*/



$(document).ready(function(){
    
    $(".spinner").fadeOut(7000 , function(){
        
        $(".loadingscreen").fadeOut(3000);
        $("body").css("overflow","auto")
    });
})

