'use strict'
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
const axios = require('axios');
let PORT = process.env.PORT || 3001;


//MongoDB
// const mongoose = require('mongoose');

// routes 

const gameData = require('./gameModule');





// servers 



// http://localhost:3001/game?title=dota


server.get('/game', gameData);

server.get('/', (req, res) => {
    res.send('YOU are on THE home route')
});

server.get('*', (req, res) => {
    res.status(404).send({
        code: 404,
        message: 'Fix it'
    })
});



server.listen(PORT, () => {
    console.log(`GOOD to have you along on this ${PORT}`);
});