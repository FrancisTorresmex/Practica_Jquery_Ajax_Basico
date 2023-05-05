

//cuando el navegador este cargado inicialmente
$(document).ready(function() {
    
    //Evento click

    $('#boton').click(function(e) {
        e.preventDefault(); //evita refrescar a cada momento
        $('img').attr('src', '/assets/robot.png');

    });

    //Pequeño
    //button:nth-child(1), selecciona solo el botón numero 1 del html, que esta dentro de subContenedor
    $('#subContenedor button:nth-child(1)').click(function(e) {
        e.preventDefault();
        $('img').attr('width', '60px');
        
    });

    //Mover
    $('#subContenedor button:nth-child(2)').click(function(e) {
       e.preventDefault();
       let margen = $('img').css('margin-left'); //se obtiene el margen a la derecha(0px)
       margen = parseInt(margen.replace('px', '')); //se elimina el px por '', y se convierte a entero
       margen = margen + 30; //aumenta los pixeles

       $('img').css('margin-left', margen + 'px');
    });

    $('#subContenedor button:nth-child(3)').click(function(e) {
        e.preventDefault(); //evita refrescar a cada momento
        $('img').toggleClass('d-none'); //toggleClass quita y pone clases, d-none (display none = ocultar)
    });

    //Evento KeyUP (al dejar de precionar la tecla, se ejecuta el evento)
    let textoUI = $('#texto');
    textoUI.keyup(function(e) {
        $('#saludo').html('Hola ' + textoUI.val() ); //se obtiene el valor que se coloque en el input
    });

    //Evento submit
    $('form').submit(function(e) {
       e.preventDefault();
    });

});