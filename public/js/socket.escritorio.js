//import { throws } from "assert";

var socket = io();


var searchParam = new URLSearchParams(window.location.search);
console.log(searchParam.has('escritorio'));
if (!searchParam.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('el escritorio es necesario')
}

var escritorio = searchParam.get('escritorio');
var label = $('small');

console.log(escritorio);

$('h1').text('Escritorio ' + escritorio);


$('button').on('click', function() {
    socket.emit('atenderTicket', ({
        escritorio: escritorio
    }), function(resp) {
        console.log(resp);
        if (resp === 'No hay tickets pendientes') {
            label.text(resp);
            alert(resp);
            return;
        }
        label.text('Ticket: ' + resp.numero);
    })
});





//var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectado con el servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos coneccion con el servidor');
});

// socket.on('estadoActual', function(data) {
//     console.log(data);
//     label.text(data.actual);
// });


// $('button').on('click', function() {
//     //console.log('click');

//     socket.emit('siguienteTicket', {
//         next: true
//     }, function(nuevoTicket) {

//         label.text(nuevoTicket);

//     })
// })