const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router_u = express.Router();

//Crear un nuevo usuario
router_u.post('/', (req, res) => {
    
    controller.addUser(req.body.name)
        .then(data =>{
            response.success(req, res, data, 201);
        })
        .catch(e => {
            response.error(req, res, 'Internal error', 500, e);
        });

});

//Obtener listado de usuarios
router_u.get('/', (req, res) => {

    controller.getUsers()
        .then((userList) => {
            response.success(req, res, userList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Internal Error', 500, e);
        });
});

// //Actualizar informacion del mensaje
// router.patch('/:id', (req, res) => {

//     controller.updateMessage(req.params.id, req.body.message)
//     .then((data) =>{
//         response.success(req, res, data, 200);
//     })
//     .catch(e => {
//         response.error(req, res, 'Error interno', 500, e);
//     });

// });

// //Eliminar un registro de mensaje
// router.delete('/:id', (req, res) => {
//     controller.deleteMessage(req.params.id)
//         .then(()=> {
//             response.success(req, res, `Usuario ${req.params.id} eliminado`, 200);
//         })
//         .catch(e => {
//             response.error(req, res, 'Error interno', 500, e);
//         });
// });

module.exports = router_u;