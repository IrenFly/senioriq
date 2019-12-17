$(document).ready(function(){
	var originalSize = $('div').css('font-size');                
    $(".resetMe").click(function(){           
        $('div').css('font-size', originalSize);         
    });

	$("#plus").click(function(){         
        var currentSize = $('div').css('font-size');         
        currentSize = parseFloat(currentSize);        
        
        $('div').css('font-size', currentSize + 1);                
    }); 

    $("#minus").click(function(){                       
        var currentSize = $('div').css('font-size');        
        var currentSize = parseFloat(currentSize);        
           
        $('div').css('font-size', currentSize - 1);             
    }); 
})