

//cuando el navegador este cargado inicialmente
$(document).ready(function() {
    
    //1- Obtener el texto que tiene el boton llamado al atributo
    // let unBoton = $('button').html();
    // console.log(unBoton);

    //2- Cambiar texto del boton llamadno al atributo
    //$('button').html("Cambiado desde jquery");

    //3- Cambiar el texto del boton llamado desde su clase
    //$('.btnPrecioname').html('cambiado usando su clase');

    //4- Cambiar el texto del boton, llamando desde su id
    //$('#boton').html("Cambiando usando id");

    //5- Cambiar el texto del primero boton que encuentre <button> en el html y del ultimo
    //$('button:first').html("Primer boton");
    //$('button:last').html("Ultimo boton");

    //5- Cambiar un boton, si existen varios botones (sin llamarlo directo)
    //$('#subContenedor button').html("Cambiado");

    //6- Agregar y eliminar clase a un elemento con jquery (agregamos una clase bootstrap de color, pero antes le quitamos la anterior)
    $('#boton').removeClass('btn btn-info'); 
    $('#boton').addClass('btn btn-danger');

    //7- Usar append, agrega elementos al final de alguna etiqueta (agregar un boton al contenedor)
        //prepend agrega elementos al inicio de alguna etiqueta
    $('#subContenedor').append('<button type="button" class="btn btn-info">Boton append</button>');
    $('#subContenedor').prepend('<button type="button" class="btn btn-info">Boton prepend</button>');

    //8- Manipular los estilos css(PropiedadName, valor), se puede por separado o en una sola linea de código
    //$('#boton').css('color', 'green');
    //$('#boton').css('background-color', 'purple');
    $('#boton').css({'color':'green', 'background-color':'purple'});

    //9- Remover(eliminar) elementos del html
    //$('#subContenedor').remove();

    //10- Ocultar elemento del html
    //$('#subContenedor').hide();

    //cambiar o agregar un elemento por otro con "attr(atributoName, valorNuevo)" (aqui se cambia la imagen del html, por otra)
        //se puede hacer todo en una sola linea agregando "{}"
    //$('img').attr('src', 'assets/robot.png');
    //$('img').attr('width', '200px'); //agrega el elemento width
    $('img').attr({'src':'/assets/robot.png', 'width':'150px'});

});