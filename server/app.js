const express = require('express');
const cors = require('cors');
const api = require('./routes/api.js');

const app = express();

const searchRoutes = require('./routes/searchResults/search.router.js');

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api);
app.use('/api/search/', searchRoutes);
module.exports = app;
