
'use strict'
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
const axios = require('axios');
const moviesFunction = async function (req,res) {
    let title =req.query.title;
    let year =req.query.year;
    let type=req.query.type;

    let url= await `https://www.omdbapi.com/?s=${title}&apikey=da2fe669&y=${year}&type=${type}`;

    await axios.get(url)
    
    .then(dataFromUrl =>{
        // console.log(dataFromUrl);
        
        let movieData=dataFromUrl.data.Search.map(item =>{

            return new Movie(item.Title, item.Poster, item.Year,item.Type)
         
    })
    // console.log(movieData);

    res.send(movieData)
  

})
}

class Movie{

    constructor(Title,Poster,Year,Type){

        this.Title=Title;
        this.Poster=Poster;
        // Type=item.plot;
        this.Year=Year;
        this.Type=Type

    }

}



// http:localhost:3001/static









module.exports = moviesFunction 