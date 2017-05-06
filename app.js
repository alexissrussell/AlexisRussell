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

$(window).scroll(function(){
    
   if ($(document).scrollTop()>500){
       $('#header2').css('display','block');   
   } else{
       $('#header2').css('display','none');
   }
    
});