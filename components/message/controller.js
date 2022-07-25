const store = require('./store');
const socket = require('../../socket').socket;
const config = require('../../config');

var ctrl = {}

ctrl.addMessage = (chat, user, message, file) => {

    return new Promise ((resolve, reject) => {
        if(!chat || !user || !message){
            console.error('[messageController] No hay chat, usuario o mensaje');
            reject('Los datos son incorrectos');
            return false;
        }

        let fileUrl = '';
        if(file){
            fileUrl = config.host + ':' + config.port + config.publicRoute + '/'+ config.filesRoute +'/' + file.filename;
        }

        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date(),
            file: fileUrl
        };
    
        store.addMessage(fullMessage);

        socket.io.emit('message', fullMessage);

        resolve(fullMessage);
    });

}

ctrl.getMessage = (filterUser) => {
    return new Promise ((resolve, reject) => {
        resolve(store.getMessage(filterUser));
    });
}

ctrl.updateMessage = (id, message) => {
    
    return new Promise ( async (resolve, reject) => {
        
        if(!id || !message){
            reject('Invalid data');
            return false;
        }

        const result = await store.updateText(id, message);

        resolve(result);
    });
}

ctrl.deleteMessage = (id) => {
    return new Promise ( (resolve, reject) => {
        
        if(!id ){
            reject('Id Invalid');
            return false;
        }

        store.remove(id)
            .then(() => {
                resolve();
            })
            .catch(err => {
                reject(err);
            })

    });
}

module.exports = ctrl;