// commad para establecer la comunicacion
var socket = io();
var lblTicket1 = $('#lblTicket1');
var lblTicket2 = $('#lblTicket2');
var lblTicket3 = $('#lblTicket3');
var lblTicket4 = $('#lblTicket4');

var lblEscritorio1 = $('#lblEscritorio1');
var lblEscritorio2 = $('#lblEscritorio2');
var lblEscritorio3 = $('#lblEscritorio3');
var lblEscritorio4 = $('#lblEscritorio4');


var lblTickets = [lblTicket1, lblTicket2, lblTicket3, lblTicket4]

var lblEscritorios = [lblEscritorio1, lblEscritorio2, lblEscritorio3, lblEscritorio4]

socket.on('estadoActual', function(data) {
    // console.log(data);
    actualizaHTML(data.ultimos4);


});
//  on 'ultimos4
socket.on('ultimos4', function(data) {
    // console.log(data);


    //var audio = new Audio('https:/ / interactive - examples.mdn.mozilla.net / media / examples / t - rex - roar.mp3 ');
    // console.log(audio.play());
    var audio = new Audio('audio/new-ticket.mp3');
    audio.autoplay = false;
    var promise = audio.play()
    console.log(promise);
    if (promise !== undefined) {
        promise.then(_ => {
            console.log(_);
            // Autoplay started!
        }).catch(error => {
            console.log(' error  no reprodujo  ', error)

            // Autoplay was prevented.
            // Show a "Play" button so that user can start playback.
        });
    } else {
        console.log('  no reprodujo  ')
    }
    // console.log(audio);
    // audio.then(function() {
    //     console.log('play')
    // });

    actualizaHTML(data.utimos4);


});





function actualizaHTML(ultimos4) {
    // console.log(ultimos4.length);
    if (ultimos4.length > 0) {
        for (var i = 0; i < ultimos4.length; i++) {
            lblTickets[i].text('Ticket ' + ultimos4[i].numero);
            lblEscritorios[i].text('Escritorio ' + ultimos4[i].escritorio);
        }
    }
}