const express = require('express')
const app = express();
const routes = require('./routes/index.js');
const morgan = require('morgan');


require('./db.js'); 

app.use(morgan('dev'));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });
 
 app.use(express.json())
 app.use('/', routes);
 
 module.exports = app