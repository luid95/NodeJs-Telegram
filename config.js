const config = {
    //url de conexion
    dbUrl: process.env.DB_URL || 'mongodb+srv://luid95:luid95@cluster0.zzlkv.mongodb.net/telegram?retryWrites=true&w=majority',
    port: process.env.PORT || '3001',
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
    filesRoute: process.env.FILES_ROUTE || 'files',

}

module.exports = config;