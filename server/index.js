require('dotenv').config();
const express = require('express');
const massive = require('massive');
const axios = require('axios');
const {CONNECTION_STRING} = process.env;
const {} = require('./controller');

const app = express();

massive(CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance);
        console.log("*clicks enter on keyboard* I'm in");
    })
    .catch(err => {
        console.log(err);
    })

app.use(express.json);

app.listen(8787, () => console.log('Running on Port 8787'));