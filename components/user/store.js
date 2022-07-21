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

module.exports = stu;