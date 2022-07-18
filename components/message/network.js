const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

//Obtener listado de mensajes
router.get('/', (req, res) => {

    const filterMessages = req.query.user || null;
    controller.getMessage(filterMessages)
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e);
        });
});

//Crear un nuevo mensaje
router.post('/', (req, res) => {
    
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) =>{
            response.success(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, 'Informacion invalida', 400, 'Error en el controlador');
        });

});

//Actualizar informacion del mensaje
router.patch('/:id', (req, res) => {

    controller.updateMessage(req.params.id, req.body.message)
    .then((data) =>{
        response.success(req, res, data, 200);
    })
    .catch(e => {
        response.error(req, res, 'Error interno', 500, e);
    });

});

//Eliminar un registro de mensaje
router.delete('/:id', (req, res) => {
    controller.deleteMessage(req.params.id)
        .then(()=> {
            response.success(req, res, `Usuario ${req.params.id} eliminado`, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        });
});

module.exports = router;