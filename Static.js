

'use strict'
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
const axios = require('axios');
// const PORT = 3001;






const staticMoviesFunction = async function (req,res) {

    

    let url= await `https://www.omdbapi.com/?s=all&apikey=da2fe669&y=2021`;

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
        // Type=item.plot;
        this.Year=Year;
        this.Type=Type
        


    }

}


module.exports = staticMoviesFunction 