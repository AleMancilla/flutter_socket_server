const express = require('express');
const path = require('path');
require('dotenv').config();

// App de express
const app = express();


// node server
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// mensajes de sockets
io.on('connection', client => {
        console.log('Cliente conectado');
        client.on('disconnect', () => { 
        console.log('Cliente desconectado');
    });
  });
//   server.listen(3000);



// path publico
const publicPath = path.resolve( __dirname, 'public');
app.use( express.static(publicPath));

server.listen( process.env.PORT, (err)=>{
    if(err){
        throw new Error(err);
    }
    console.log('!!!Servidor corriendo en puerto: ',process.env.PORT);
    
} )