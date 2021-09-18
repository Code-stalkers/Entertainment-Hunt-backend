'use strict'
require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const server = express();
// server.use(cors());
const axios = require('axios');
let Memory = {};


//MongoDB
// const mongoose = require('mongoose');


// movie API key apikey=da2fe669
// https://www.omdbapi.com/?s=SOMETHING&apikey=da2fe669 this is for serching for a movie title

//https://www.omdbapi.com/?s=warzone&apikey=da2fe669&type=game
class GAME {
    constructor(Title,Poster,Type,Year) {
        this.Title=Title
        this.Poster=Poster
        this.Type=Type
        this.Year=Year
        
        
    }
}
async function gameData (req, res) {
    const title = req.query.title;
    if (Memory[title] !== undefined) {
        res.send(Memory[title]);
      } 
    
    
      else {
        let url = await`https://www.omdbapi.com/?s=${title}&apikey=43804fed&type=game`;
   
        await axios
            .get(url)
            .then(data => {
                let newGAME = data.data.Search.map(item => {
                    return new GAME(item.Title,item.Poster,item.Type,item.Year);
                })
                Memory[title] = newGAME;
                res.send(newGAME)
            })
            .catch(err => console.log(err))

      }
    
}


// server.get('/game', gameData);
module.exports = gameData

