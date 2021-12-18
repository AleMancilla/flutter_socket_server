const {io} = require('../index');
// mensajes de sockets
io.on('connection', client => {
    console.log('Cliente conectado');
    
    client.on('disconnect', () => { 
        console.log('Cliente desconectado');
    });

    client.on('mesaje', (payload)=>{
        console.log('mensaje!!!',payload);
        io.emit('mensaje', {admin: 'Nuevo Mensaje!!'});
    });

  });