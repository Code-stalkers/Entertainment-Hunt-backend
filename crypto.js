'use strict';
const { default: axios } = require("axios");
const mongoose = require("mongoose");

let obj = {};
let recommendationModel ;
obj.main = async function () {

    const recommendationScema = new mongoose.Schema({
        name : String,
        coin : String,
        description : String,
    });
    recommendationModel = mongoose.model("recommendation", recommendationScema);
    
};

obj.marketCap = function (req,res){
    const url ='https://api.coinpaprika.com/v1/global';

    axios
    .get(url)
    .then(result => {
        res.send(result.data); 
    })
    .catch(err => console.log('error'))
}

obj.top20Coins = function (req,res){
    const url = 'https://api.coinpaprika.com/v1/tickers';
    let top20 = [];
    axios
    .get(url)
    .then(result => {
        for (let i = 0; i < 20; i++) {
            top20.push(result.data[i]);
        }
        res.send(top20);
    })
}

obj.recommendation = function(req,res){
    const coin = req.params.coin;
    const url = `https://technical-analysis-api.com/api/v1/analysis/${coin}?apiKey=P7U4DUETOPPYENAKCJHZXAIUBQ4RI2ORGBQ2WLTJPLA6DV4H`;
    axios
    .get(url)
    .then(result => {
        console.log(result.data);
        res.send(result.data);
    })
    .catch(err=>console.log('error'))
}

obj.search = function(req,res){
    const {symbol } = req.query;
    const url =`https://api.lunarcrush.com/v2?data=assets&key=rjbttn9vge3dnq5tqxl8w&symbol=${symbol}`;
    axios
    .get(url)
    .then(result => {
        res.send(result.data)
    })
    .catch(err => console.log('error'))
}

obj.addRecommendation = async function (req, res) {
    const { name, coin, description } = req.body;
    await recommendationModel.create({ name, coin, description});
    recommendationModel.find({ coin: coin }, (err, result) => {
      if (err) console.log("error");
      else{
          console.log(result); 
      res.send(result);
    }
    });
  };

module.exports = obj;


