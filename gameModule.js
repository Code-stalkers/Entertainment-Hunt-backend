
'use strict'
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
const axios = require('axios');
server.use(express.json());
let Memory = {};

const mongoose = require('mongoose');

let game;
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(`mongodb://localhost:27017/game`);
    const gameSchema = new mongoose.Schema({
        Title: String,
        Poster: String,
        Type: String,
        Year: String,
        email: String,
        comment: String

    });


    game = mongoose.model('game', gameSchema);

    saving()

}
async function saving() {
}
// addingWatchlist
async function addingfavelist(req, res) {
    const Title = req.body.Title;
    const Poster = req.body.Poster;
    const Type = req.body.Type;
    const Year = req.body.Year;
    const email = req.body.email;
    // const { title, description, authoremail } = req.body;
    await game.create({
        Title: Title,
        Poster: Poster,
        Type: Type,
        Year: Year,
        email:email,
    });
    //  console.log(req.body)
    game.find({ email: email }, (err, result) => {
      if (err) {
        console.log(err);
      }
      else {
          
        res.send(result);
      }
    })
  
  }


//   getfilmssHandler to render

  function getgameHandler(req, res) {
    const email = req.query.email;
    console.log(email)
    game.find({ email: email }, (err, result) => {
      if (err) {
        console.log(err);
      }

      else {
          console.log(result)
        res.send(result);
      }
  
    })
  }
  

  function addingcommentlist(req, res) {
     const filmId = req.params.id
        // const email = req.query.email;
        const {Title,Year,Type,Poster,comment}=req.body;
      
        films.findByIdAndUpdate(filmId,{Title,Year,Type,comment,Poster},(err,result)=>{
            films.find({ email: email  },(err,result)=>{
                  res.send(result);
              console.log(result)
          })
      })}
      
    


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
module.exports = {gameData,getgameHandler,addingfavelist,addingcommentlist}


// function updateCommentHandler(req,res) {
   
    
      