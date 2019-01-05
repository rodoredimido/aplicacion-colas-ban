// Comando para establecer la conexion

var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectado con el servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos coneccion con el servidor');
});

socket.on('estadoActual', function(data) {
    console.log(data);
    label.text(data.actual);
});


$('button').on('click', function() {
    //console.log('click');

    socket.emit('siguienteTicket', {
        next: true
    }, function(nuevoTicket) {

        label.text(nuevoTicket);

    })
})