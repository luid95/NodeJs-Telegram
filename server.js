const express = require('express');
const bodyParser = require('body-parser');

const response = require('./network/response');

const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);


router.get('/message', (req, res) => {

    res.header({
        "custom-header": "Nuestro valor personalizado",
    });

    //res.send('Lista de mensajes');
    response.success(req, res, 'Lista de mensajes', 200);
});

router.post('/message', (req, res) => {
    console.log(req.query);
    if(req.query.error != 'ok'){
        response.error(req, res, 'Error simulado', 400);
    }else{
        response.success(req, res, 'Creado correctamente', 201);
    }
    //res.status(201).send({error: '', body: "Creado correctamente"});
});

app.use('/app', express.static('public'));

app.listen(3001);

console.log('La aplicacion esta escuchando en http://localhost:3001');