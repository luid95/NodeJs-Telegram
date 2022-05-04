const express = require('express');
const router = express.Router();

var app = express();

app.use(router);


router.get('/message', (req, res) => {
    res.send('Lista de mensajes');
});

router.post('/message', (req, res) => {
    res.send('Mensaje añanido');
});

// app.use('/', (req, res) => {
//     res.send('Hola');
// });

app.listen(3001);

console.log('La aplicacion esta escuchando en http://localhost:3001');