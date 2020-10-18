/* The following code has been adapted from an answer on stackoverflow by user 'empiric' for text, this save and load function has been adapted to be used with numbers. SRC = https://stackoverflow.com/questions/27273444/save-and-load-input-values-using-local-storage*/


$('#save').on('click', function(){

    $('input[type="number"]').each(function(){    
        var id = $(this).attr('id');
        var value = $(this).val();
       localStorage.setItem(id, value);

    });   
});

$('#load').on('click', function(){
    $('input[type="number"]').each(function(){    
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);

        $(this).val(value);

    }); 
});