'use strict'
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
const axios = require('axios');
// const PORT = 3001;
server.use(express.json());


///////////////////////mongo
const mongoose = require('mongoose');

let films;
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(`mongodb://localhost:27017/movie`);

    // await mongoose.connect(`mongodb://Mohammad-Haroun-97:awdsef135.@myfirstcluster-shard-00-00.xvzzr.mongodb.net:27017,myfirstcluster-shard-00-01.xvzzr.mongodb.net:27017,myfirstcluster-shard-00-02.xvzzr.mongodb.net:27017/Films?ssl=true&replicaSet=atlas-tlumk8-shard-0&authSource=admin&retryWrites=true&w=majority`);
    const filmsSchema = new mongoose.Schema({
        Title: String,
        Poster: String,
        Type: String,
        Year: String,
        email: String,
        comment: String

    });


    films = mongoose.model('Films', filmsSchema);

    saving()



}
async function saving() {
}

async function addingWatchlist(req, res) {
    const Title = req.body.Title;
    const Poster = req.body.Poster;
    const Type = req.body.Type;
    const Year = req.body.Year;
    const email = req.body.email;
    // const { title, description, authoremail } = req.body;
    await films.create({
        Title: Title,
        Poster: Poster,
        Type: Type,
        Year: Year,
        email:email,
    });
    //  console.log(req.body)
    films.find({ email: email }, (err, result) => {
      if (err) {
        console.log(err);
      }
      else {
          
        res.send(result);
      }
    })
  
  }



  function getfilmssHandler(req, res) {
    const email = req.query.email;
    films.find({ email: email }, (err, result) => {
      if (err) {
        console.log(err);
      }
      else {
        res.send(result);
      }
  
    })
  }
  
function updateCommentHandler(req,res) {
    const filmId = req.params.id
    // const email = req.query.email;
    const {Title,Year,Type,Poster,comment}=req.body;
  
    films.findByIdAndUpdate(filmId,{Title,Year,Type,comment,Poster},(err,result)=>{
        films.find({ email: email  },(err,result)=>{
       
              res.send(result);
          console.log(result)
      })
  })}
  
  server.put('/updateComment/:id',updateCommentHandler);

  


////////////////////////////////////

// http://localhost:3001

const staticMoviesFunction = async function (req, res) {


    let url = await `https://www.omdbapi.com/?s=war&apikey=da2fe669&y=2021`;

    await axios.get(url)

        .then(dataFromUrl => {
            // console.log(dataFromUrl);

            let staticMovieData = dataFromUrl.data.Search.map(item => {

                return new Static(item.Title, item.Poster, item.Year, item.Type)

            })
            // console.log(staticMovieData);

            res.send(staticMovieData)



        })
}

class Static {

    constructor(Title, Poster, Year, Type) {
        this.Title = Title;
        this.Poster = Poster;
        this.Year = Year;
        this.Type = Type

    }

}


module.exports = { staticMoviesFunction, addingWatchlist ,getfilmssHandler}