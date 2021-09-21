"use strict";
let comment = "";
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const server = express();
server.use(cors());
const axios = require("axios");
server.use(express.json());

// const PORT = 3001;
let obj = {};
///////////////////////mongo
const mongoose = require("mongoose");

let films;

 obj.main= async function() {
  const filmsSchema = new mongoose.Schema({
    Title: String,
    Poster: String,
    Type: String,
    Year: String,
    comment: String,
  });

  films = mongoose.model("Films", filmsSchema);

  obj.saving();
}

 obj.saving=async function() {}

obj.updateCommentHandler= function (req, res) {
  const filmId = req.params.id;
  // const email = req.query.email;
  const { Title, Year, Type, Poster, comment } = req.body;

  films.findByIdAndUpdate(
    filmId,
    { Title, Year, Type, comment, Poster },
    (err, result) => {
      films.find({}, (err, result) => {
        res.send(result);
      });
    }
  );
}

 obj.addingWatchlist= function(req, res) {
  const movieList = new films({
    Title: req.query.Title,
    Poster: req.query.Poster,
    Type: req.query.Type,
    Year: req.query.Year,
    comment: "",
  });

  // let movieList=req.query;

  console.log("final", req.query);

  movieList.save();
  res.send("hello");
}

 obj.userAddingList= function(req, res) {
  const var1 = req.body;
  console.log("varrrr", var1);

  const userMovieList = new films({
    Title: req.body.userObjEst.Title,
    Poster: req.body.userObjEst.Poster,
    Type: req.body.userObjEst.Type,
    Year: req.body.userObjEst.Year,
    comment: "",
  });

  console.log("final", userMovieList);

  userMovieList.save();

  res.send(var1);
}

////////////////////////////////////

// http://localhost:3001

obj.staticMoviesFunction = async function (req, res) {
  let url = await `https://www.omdbapi.com/?s=war&apikey=da2fe669&y=2021`;

  await axios
    .get(url)

    .then((dataFromUrl) => {
      // console.log(dataFromUrl);

      let staticMovieData = dataFromUrl.data.Search.map((item) => {
        return new Static(
          item.Title,
          item.Poster,
          item.Year,
          item.Type,
          comment
        );
      });
      console.log(staticMovieData);

      res.send(staticMovieData);
    });
};

class Static {
  constructor(Title, Poster, Year, Type, comment) {
    this.Title = Title;
    this.Poster = Poster;

    this.Year = Year;
    this.Type = Type;
    this.comment = "comment";
  }
}

module.exports = obj;
