$(function () {            
    $('a[href*="#"]:not([href="#"])').click(function () {                
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {                    
            var target = $(this.hash);                    
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');                    
            if (target.length) {                        
                $('html, body').animate({                            
                    scrollTop: target.offset().top - 150                        
                }, 500);                        
                return false;                    
            }                
        }            
    });        
});



// shrinking header

$(document).scroll(function(){
    
   if ($(document).scrollTop()>500){
       $('#header2').css('display','block');   
   } else{
       $('#header2').css('display','none');
   }
    
});




//page arrows


var leftA = document.getElementById("leftArrow");
var downA =  document.getElementById("downArrow");
var rightA = document.getElementById("rightArrow");


leftA.addEventListener("click",function(){
   
    console.log("About Page");
    window.open("about.html","_self");
    
});


// Contact Form 


$('#submit').click(function(ev){
    console.log("Submit Button")
    ev.preventDefault();
    $('#popup').css('display','block');
    $('#popup2').css('display','block');
    $('#exitBut').css('display','block');
    
    var input = document.getElementById("name");
    var span = document.getElementById("span_name")
    
        span.innerHTML = input.value;
       
});

$('#exitBut').click(function(ev){
    console.log("Submit Button")
    ev.preventDefault();
    $('#popup').css('display','none');
    $('#popup2').css('display','none');
    $('#exitBut').css('display','none');
    
});



