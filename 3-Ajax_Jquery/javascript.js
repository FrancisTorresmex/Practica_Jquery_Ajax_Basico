$(document).ready(function () {
    
    //1
    $('#leer').click(function(e) {
        e.preventDefault();

        //Llamada AXAJ get, los parametros son: data = Datos obtenidos, textStatus = estatus de la llamada ajax, 
        //jqXHR = el requerimiento total (mucha info del estado de respuesta de la petición)
        $.get("archivo.txt", function(data, textStatus, jqXHR) {
            console.log(data);
            console.log(textStatus);
            console.log(jqXHR);
        });
    });

    //2
    $('#leerEmpleado').click(function (e) {
       e.preventDefault();
       
       //La función es un callback, osea que cuando termine de ejecutarse entra en la función y regresa los datos
       $.get("desarrolladores.json", function(data) {
            console.log(data);
            console.log(data.Nombre);
            $('#datosEmpleado').html(`
                Nombre: ${data.Nombre} <br>
                Puesto: ${data.Puesto} <br>
                Edad:   ${data.Edad}   <br> 
            `);

       });
    });

    //3
    $('#leerArregloEmpleados').click(function(e) {
        e.preventDefault();
        $.get("desarrolladores.json", function(data) {
           //console.log(data); 

            $('#listaEmpleados').html('');

           //Recorrer lista con jquery $.each(datos, callback o funcion(regresa el Index o id del elemento, regresa el valor del elemento))
           $.each(data, function (index, item) {

                //Aqui solo se sobresrcibe, por lo que solo muestra el ultimo empleado de la lista
                //para evitar esto, se debe concatenar el mismo elemento, (se comento el que sobresribe)
                // $('#listaEmpleados').html(`
                //     <li>${item.Nombre}</li>
                // `);

                $('#listaEmpleados').html($('#listaEmpleados').html()+ ` 
                    <li>${item.Nombre} -- ${item.Puesto}</li>
                `);

           });
        });
    });


    //4
    $('#leerGetJson').click(function(e) {
       e.preventDefault();

       //Igual a $.get(), pero con mejoras, ya que $.getJson(), puede convertir a json, varios tipos de datos, por ejemplo un txt,
       //a diferencia de $.get(), que tendria que usar el metodo js de JSON.parse()
       $.getJSON("desarrolladores.txt", function(data) {            
            console.log(data);
       }); 

       $.get("desarrolladores.txt", function(data) {
            data = JSON.parse(data);
            console.log(data);
       });
       
       //Colocar un arreglo dentro de un objeto (un json con objetos que tienen listas cada uno)
       $.getJSON("desarrolladores2.json", function(data) {

            console.log(data.empleados);
            $('#listaEmpleados').html('');
            $.each(data.empleados, function(index, item) { //puede ser data.empleados o data.empleadosTemporales, en este caso
                $('#listaEmpleados').html($('#listaEmpleados').html()+ ` 
                    <li>${item.Nombre} -- ${item.Puesto}</li>
                `);
            });  
        }); 

    });


    //5 Filtro AJAX
    let empleados;
    $.getJSON("desarrolladores2.json", function(data) {
        empleados = data.empleados;
    });
    $("#nombreFiltro").keyup(function(e) { //keyup detecta cuando se solto la tecla (el buscador en este caso)
        $('#listaEmpleados').html('');
        let nombre = $("#nombreFiltro").val();

        $.each(empleados, function(index, item) {
            //indexOf compara si encuentra el string, si es -1 = false, otro numero = true
           if(item.Nombre.toLowerCase().indexOf(nombre.toLowerCase()) != -1) {
                $('#listaEmpleados').html($('#listaEmpleados').html()+ ` 
                <li>${item.Nombre} -- ${item.Puesto}</li> `);
           } 
        });
    });


});