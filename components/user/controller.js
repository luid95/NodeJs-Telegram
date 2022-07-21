const store = require('./store');
var ctrlu = {}

ctrlu.addUser = (name) => {

    if(!name){
        return Promise.reject('Invalid name');
    }

    const user = {
        name
    }

    return store.addUser(user);
}

ctrlu.getUsers = () => {
    
    return store.getUsers();
}

// ctrl.updateMessage = (id, message) => {
    
//     return new Promise ( async (resolve, reject) => {
        
//         if(!id || !message){
//             reject('Invalid data');
//             return false;
//         }

//         const result = await store.updateText(id, message);

//         resolve(result);
//     });
// }

// ctrl.deleteMessage = (id) => {
//     return new Promise ( (resolve, reject) => {
        
//         if(!id ){
//             reject('Id Invalid');
//             return false;
//         }

//         store.remove(id)
//             .then(() => {
//                 resolve();
//             })
//             .catch(err => {
//                 reject(err);
//             })

//     });
// }

module.exports = ctrlu;