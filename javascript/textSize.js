$(document).ready(function(){
	/* var actualFontSize = $('div').css('font-size');                
    $(".resetMe").click(function(){           
        $('div').css('font-size', originalSize);         
    });*/

	$("#plus").click(function(){         
        var currentSize = $('div').css('font-size');         
        currentSize = parseFloat(currentSize);        
        
        $('div, h2').css('font-size', currentSize + 1.5);

        if (currentSize >= 20) {
            $('.letter_fix, #event_view').css('line-height', '25px')
        }                
    }); 

    $("#minus").click(function(){                       
        var currentSize = $('div').css('font-size');        
        var currentSize = parseFloat(currentSize);        
           
        $('div, h2').css('font-size', currentSize - 1.5); 

        if (currentSize <= 20) { 
            $('.letter_fix, #event_view').css('line-height', '18px')
        }            
    });
})