const Model = require('./model');

const stu = {};

//Agregar usuarios
stu.addUser = (user) => {
    
    const myUser = new Model(user);
    return myUser.save();

} 

//Leer lista de usuarios
stu.getUsers =  () =>{
    
    const users =  Model.find();
    return users;
}

// //Actualizar un mensaje
// st.updateText = async (id, message) =>{
    
//     const foundMessage = await Model.findOne({
//         _id: id
//     });
    
//     foundMessage.message = message;
//     const newMessage = await foundMessage.save();

//     return newMessage;

// }

// //Eliminar un mensaje
// st.remove = (id) => {
//     Model.deleteOne({
//         _id: id
//     });
// }

module.exports = stu;