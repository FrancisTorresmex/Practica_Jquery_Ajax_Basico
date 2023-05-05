$(document).ready(function () {
    
    $('#ajaxBtn').click(function(e) {
       e.preventDefault();
       
       //Llamar función ajax
       $.ajax({
            url: "desarrolladores2.json", //url o dirección del api 
            type: 'get', //tipo de petición (get, post, etc)
            dataType: 'json',  //el tipo de datos que se quieren
            success: function(data) { //cuando el resultado sea exitoso se dice que se hara con la info
                console.log(data);
                    $.each(data.empleados, function(index, item) {
                        $('#listaEmpleados').html($('#listaEmpleados').html()+ ` 
                        <li>${item.Nombre} -- ${item.Puesto}</li>
                    `);
                });
            },
            error: function(xhr, status, error) { //si falla la petición, se dice que hara (para probar, poner url erronea)
                console.log(xhr);
                console.log(status);
                console.log(error);
            }
       });
    });

});