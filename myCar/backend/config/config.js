const config = require('./config.json');

process.env.MONGODB_URL = config.development.MONGODB_URL;
process.env.PORT = config.development.SERVER_PORT