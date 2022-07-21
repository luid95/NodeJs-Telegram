const store = require('./store');
var ctrlc = {}

ctrlc.addChat = (users) => {

    if(!users || !Array.isArray(users)){
        return Promise.reject('Invalid user list');
    }

    const chat = {
        users: users
    }

    return store.addChat(chat);
}

ctrlc.getChats = (userId) => {
    
    return store.getChats(userId);
}

module.exports = ctrlc;