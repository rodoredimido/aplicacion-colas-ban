const { io } = require('../server');

const { TicketControl } = require('../classes/ticket-control');

const ticketControl = new TicketControl();

io.on('connection', (client) => {

    console.log('Usuario conectado');





    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });



    client.on('siguienteTicket', (data, callback) => {
        // ticketControl.siguiente();
        let dato = ticketControl.siguiente();
        // console.log(dato);
        // console.log(callback);
        callback(dato);
        // console.log(client.on(client.on('siguienteTicket')));
        //client.broadcast.emit('enviarMensaje', data);

    });


    client.emit('estadoActual', {
        actual: ticketControl.getUltimoTicket(),
        ultimos4: ticketControl.getUltimos4()

    });

    client.on('atenderTicket', (data, callback) => {
        if (!data.escritorio) {
            return callback({
                err: true,
                mensaje: 'el escritorio es necezario'
            });
        }
        // console.log(ticketControl);
        let atenderTicket = ticketControl.atenderTicket(data.escritorio);
        // console.log(atenderTicket);

        client.broadcast.emit('ultimos4', {
            utimos4: ticketControl.getUltimos4()
        })
        callback(atenderTicket);


        // actualizar o notificar cambios en los ultimos 4

    });

    // emitir 'ultimnos4'



});