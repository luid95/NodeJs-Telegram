const db = require('mongoose');
const Model = require('./model');

const url = 'mongodb+srv://luid95:luid95@cluster0.zzlkv.mongodb.net/telegram?retryWrites=true&w=majority';

db.Promise = global.Promise;
db.connect(url, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
  .then(() => console.log('[db] Conectada con éxito'))
  .catch(err => console.error('[db]', err));


const st = {};

st.addMessage = (message) => {
    // list.push(message);
    const myMessage = new Model(message);
    myMessage.save();

} 

st.getMessage = async (filterUser) =>{
    // return list;
    const filter = {};
    if(filterUser !== null){
        filter - { user: filterUser}
    }
    const messages = await Model.find(filter);
    return messages;
}

st.updateText = async (id, message) =>{
    
    const foundMessage = await Model.findOne({
        _id: id
    });
    
    foundMessage.message = message;
    const newMessage = await foundMessage.save();

    return newMessage;

}

module.exports = st;