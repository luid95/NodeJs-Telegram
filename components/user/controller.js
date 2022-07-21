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

module.exports = ctrlu;