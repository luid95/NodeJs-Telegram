const Model = require('./model');

const st = {};

//Agregar mensajes
st.addMessage = (message) => {
    // list.push(message);
    const myMessage = new Model(message);
    myMessage.save();

} 

//Leer mensajes
st.getMessage = async (filterUser) =>{
    return new Promise((resolve, reject) =>{

        const filter = {};
        if(filterUser !== null){
            filter - { user: filterUser}
        }
        const messages = await Model.find(filter)
            .populate('user')
            .exec((error, populated) => {
                if(error){
                    reject(error);
                    return false;
                }

                resolve(populated);

            });

    });
    
}

//Actualizar un mensaje
st.updateText = async (id, message) =>{
    
    const foundMessage = await Model.findOne({
        _id: id
    });
    
    foundMessage.message = message;
    const newMessage = await foundMessage.save();

    return newMessage;

}

//Eliminar un mensaje
st.remove = (id) => {
    Model.deleteOne({
        _id: id
    });
}

module.exports = st;