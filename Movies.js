'use strict'
// const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
const axios = require('axios');
const PORT = 3001;

let obj ={};
// let films; 
// main().catch(err => console.log(err));


// async function main() {
//     await mongoose.connect(`mongodb://Mohammad-Haroun-97:awdsef135.@myfirstcluster-shard-00-00.xvzzr.mongodb.net:27017,myfirstcluster-shard-00-01.xvzzr.mongodb.net:27017,myfirstcluster-shard-00-02.xvzzr.mongodb.net:27017/Films?ssl=true&replicaSet=atlas-tlumk8-shard-0&authSource=admin&retryWrites=true&w=majority`);
//     const filmsSchema  = new mongoose.Schema({
//       Title: String,
//       Poster:String,
//       Type:String,
//       Year:String,
//       comment:String,
     
//   });


  

//  saving()



// }

// async function saving() {


    
// }













// http:localhost:3001/static


obj.moviesFunction = async function (req,res) {

    let title =req.query.title;
    let year =req.query.year;
    let type=req.query.type;

    let url= await `https://www.omdbapi.com/?s=${title}&apikey=da2fe669&y=${year}&type=${type}`;

    await axios.get(url)
    
    .then(dataFromUrl =>{
        // console.log(dataFromUrl);
        
        let movieData=dataFromUrl.data.Search.map(item =>{

            return new Movie(item.Title, item.Poster, item.Year,item.Type,item.comment)
         
    })
    console.log(movieData);

    res.send(movieData)
  

})
}

class Movie{

    constructor(Title,Poster,Year,Type,comment){

        this.Title=Title;
        this.Poster=Poster;
        // Type=item.plot;
        this.Year=Year;
        this.Type=Type;
        this.comment='comment'

    }

}






module.exports = obj;