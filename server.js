
'use strict'

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
const axios = require('axios');
const crypto = require('./crypto');
const statics =require('./Static.js');
const movie=require('./Movies.js');
const game = require('./gameModule');
let PORT = process.env.PORT;



server.use(express.json());
//MongoDB
 const mongoose = require('mongoose');

  mongoose.connect(process.env.MONGO_URL);
  crypto.main().catch(err => console.log(err));
  statics.main().catch((err) => console.log(err));
  game.main().catch(err => console.log(err));


// haroun 


server.get('/movie', movie.moviesFunction);

server.get('/static', statics.staticMoviesFunction);

server.get('/addToWatchlist',statics.addingWatchlist);

server.post('/userAddingList',statics.userAddingList);

server.put('/updateComment/:id',statics.updateCommentHandler);

// marwan & sohaib


server.get('/addgame', game.getgameHandler);

server.post('/addfavgame',game.addingfavelist);

server.put('/updateComment/:id',game.addingcommentlist);

server.get('/game', game.gameData);

// ahmad

server.get('/cryptoMarketCap', crypto.marketCap );

server.get('/cryptoCoins', crypto.top20Coins );

server.get('/cryptoRecommendation/:coin', crypto.recommendation);

server.get('/cryptoSearch',crypto.search);

server.post('/addRecommendation',crypto.addRecommendation);

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






