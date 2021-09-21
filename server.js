
'use strict'

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
const axios = require('axios');
let PORT = 3001;
server.use(express.json());



const gameData = require('./gameModule');


// const staticMoviesFunction=require('./Static')

const {addingWatchlist,staticMoviesFunction,updateCommentHandler,userAddingList}=require('./Static.js')

// const userAddingList=require('./Movies.js')

const {moviesFunction}=require('./Movies.js')

// const moviesFunction=require('./Movies')

//MongoDB

// http://localhost:3001

server.get('/movie', moviesFunction);

// http://localhost:3001/movie

server.get('/static', staticMoviesFunction);

// servers 

// http://localhost:3001/addToWatchlist

server.get('/addToWatchlist',addingWatchlist)

server.post('/userAddingList',userAddingList)



server.put('/updateComment/:id',updateCommentHandler);






// function addingWatchlist(req,res) {
//     const movieList=new films ()

//     let movieList=req.query;
    
//     console.log('final',req.query);

//     movieList.save();
//     res.send('hello')
    
// }

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
    console.log(`GOOD to have you along on this 3001`);
});






