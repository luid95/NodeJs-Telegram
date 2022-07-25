const express = require('express');
const app = express();
const server =require('http').Server(app);

const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
//const router = require('./components/message/network');
const router = require('./network/routes');

//url de conexion
const url = 'mongodb+srv://luid95:luid95@cluster0.zzlkv.mongodb.net/telegram?retryWrites=true&w=majority';
db.connect(url);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

socket.connect(server);

router(app);


app.use('/app', express.static('public'));

server.listen(3001, () => {

    console.log('La aplicacion esta escuchando en http://localhost:3001');
});
