const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');
//const router = require('./components/message/network');
const router = require('./network/routes');

//url de conexion
const url = 'mongodb+srv://luid95:luid95@cluster0.zzlkv.mongodb.net/telegram?retryWrites=true&w=majority';
db.connect(url);

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(router);

router(app);


app.use('/app', express.static('public'));

app.listen(3001);

console.log('La aplicacion esta escuchando en http://localhost:3001');