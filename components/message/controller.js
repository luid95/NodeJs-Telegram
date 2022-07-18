const store = require('./store');
var ctrl = {}

ctrl.addMessage = (user, message) => {

    return new Promise ((resolve, reject) => {
        if(!user || !message){
            console.error('[messageController] No hay usuario o mensaje');
            reject('Los datos son incorrectos');
            return false;
        }

        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        };
    
        store.addMessage(fullMessage);
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