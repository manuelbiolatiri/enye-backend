const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const getRouter = require('./routes/rates');

// instantiate express
const app = express();

// configure cors
app.use(cors());

const port = process.env.PORT || 3001;

// configure bodyparser
app.use(bodyParser.json({ extended : true }));

// welcome route
app.get('/', (req, res) => {
    res.status(200).json(({
        status: 'success',
        message: 'welcome to the xchange api'
    }))
})

// app router
app.use('/', getRouter);

// wronge routes
app.use('*', (req, res) => {
    res.status(404).json({
        status: 'error',
        error: 'wrong route'
    })
})

app.listen(port,() => {
    console.log(`app is running on ${port}`)
})

module.exports = app;
