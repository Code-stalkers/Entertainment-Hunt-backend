

'use strict'
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
const axios = require('axios');
// const PORT = 3001;


///////////////////////mongo
const mongoose = require('mongoose');

let films; 
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(`mongodb://Mohammad-Haroun-97:awdsef135.@myfirstcluster-shard-00-00.xvzzr.mongodb.net:27017,myfirstcluster-shard-00-01.xvzzr.mongodb.net:27017,myfirstcluster-shard-00-02.xvzzr.mongodb.net:27017/Films?ssl=true&replicaSet=atlas-tlumk8-shard-0&authSource=admin&retryWrites=true&w=majority`);
    const filmsSchema  = new mongoose.Schema({
      Title: String,
      Poster:String,
      Type:String,
      Year:String,
     
  });


  films = mongoose.model('Films', filmsSchema);

 saving()



}

async function saving() {





    
}


function addingWatchlist(req,res) {
    
    const movieList=new films ({
         Title: req.query.Title,
       Poster : req.query.Poster,
        Type : req.query.Type,
        Year : req.query.Year})

    // let movieList=req.query;
    
    console.log('final',req.query);

    movieList.save();
    res.send('hello')
    
}

  ////////////////////////////////////

// http://localhost:3001

const staticMoviesFunction = async function (req,res) {

    
    let url= await `https://www.omdbapi.com/?s=war&apikey=da2fe669&y=2021`;

    await axios.get(url)
    
    .then(dataFromUrl =>{
        // console.log(dataFromUrl);
        
        let staticMovieData=dataFromUrl.data.Search.map(item =>{

            return new Static(item.Title, item.Poster, item.Year,item.Type)
         
    })
    console.log(staticMovieData);

    res.send(staticMovieData)
    


})
}

class Static{

    constructor(Title,Poster,Year,Type){

        this.Title=Title;
        this.Poster=Poster;
        
        this.Year=Year;
        this.Type=Type
       
    }

}


module.exports ={ staticMoviesFunction , addingWatchlist }