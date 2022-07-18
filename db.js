const db = require('mongoose');
const db_config = {};

db.Promise = global.Promise;

db_config.connect = async (url) => {

    await db.connect(url, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
      .then(() => console.log('[db] Conectada con éxito'))
      .catch(err => console.error('[db]', err));
}

module.exports = db_config;
