const express = require('express');

const response = require('../../network/response');

const router = express.Router();

router.get('/', (req, res) => {

    res.header({
        "custom-header": "Nuestro valor personalizado",
    });

    //res.send('Lista de mensajes');
    response.success(req, res, 'Lista de mensajes', 200);
});

router.post('/', (req, res) => {
    console.log(req.query);

    if(req.query.error == 'ok'){
        response.error(req, res, 'Error inesperado', 500, 'Es solo una simulacion de los errores');
    }else{
        response.success(req, res, 'Creado correctamente', 201);
    }
    //res.status(201).send({error: '', body: "Creado correctamente"});
});

module.exports = router;