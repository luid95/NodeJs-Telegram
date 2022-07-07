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

ctrl.getMessage = () => {
    return new Promise ((resolve, reject) => {
        resolve(store.getMessage());
    });
}

module.exports = ctrl;