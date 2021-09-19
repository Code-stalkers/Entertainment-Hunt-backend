'use strict';
const { default: axios } = require("axios");

let obj = {};
class Crypto {
    constructor(item){
        this.market_cap_usd = item.market_cap_usd;
        this.bitcoin_dominance= item.bitcoin_dominance_percentage;
        this.cryptocurrencies_number= item.cryptocurrencies_number;
    }
}

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
    const url = `https://technical-analysis-api.com/api/v1/analysis/${coin}?apiKey=P7U4DUETOPPYENAKCJHZXAIUBQ4RI2ORGBQ2WLTJPLA6DV4H`;
    axios
    .get(url)
    .then(result => {
        res.send(result.data);
    })
    .catch(err=>console.log('error'))
}

module.exports = obj;


