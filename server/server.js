const http = require('http');
const app = require('./app.js');

require('dotenv').config()

const {mongoConnect} = require('./utils/mongo')

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
    await mongoConnect();


    server.listen(PORT, () => {
        console.log(`Listening to Port: ${PORT}`);
    });
};

    startServer()