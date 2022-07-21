const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router_c = express.Router();

//Crear un nuevo chat
router_c.post('/', (req, res) => {
    
    controller.addChat(req.body.users)
        .then((data) =>{
            response.success(req, res, data, 201);
        })
        .catch(e => {
            response.error(req, res, 'Internal error', 500, e);
        });

});

//Obtener listado de chats
router_c.get('/:userId', (req, res) => {

    controller.getChats(req.params.userId)
        .then((users) => {
            response.success(req, res, users, 200);
        })
        .catch(e => {
            response.error(req, res, 'Internal  Error', 500, e);
        });
});


module.exports = router_c;