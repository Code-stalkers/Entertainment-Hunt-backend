
'use strict'

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
const axios = require('axios');
let PORT = process.env.PORT||3001;
server.use(express.json());

//MongoDB
 const mongoose = require('mongoose');
 let gamesModel;
 main().catch(err => console.log(err));
 
 async function main() {
    await  mongoose.connect('mongodb://localhost:27017/game');
 
   const gameSchema = new mongoose.Schema({
     Title: String,
     Poster: String,
     Type: String,
     Year: String
   });
 
   gamesModel = mongoose.model('game', gameSchema);
 
    //   seedData();
 }
 
 //seeding a data function 
 async function seedData() {
    // const dataaa = require('./gameModule');
    // let Memory = dataaa.Memory;
    // Memory = new gamesModel
    // Memory.loadDatabase();
   const game = new gamesModel({
     Title: 'War and Peace',
     Poster: `War and Peace broadly focuses on Napoleon’s invasion of Russia in 1812 and follows three of the most well-known characters in literature: Pierre Bezukhov, the illegitimate son of a count who is fighting for his inheritance and yearning for spiritual fulfillment; Prince Andrei Bolkonsky, who leaves his family behind to fight in the war against Napoleon; and Natasha Rostov, the beautiful young daughter of a nobleman who intrigues both men.
     A s Napoleon’s army invades, Tolstoy brilliantly follows characters from diverse backgrounds—peasants and nobility, civilians and soldiers—as they struggle with the problems unique to their era, their history, and their culture. And as the novel progresses, these characters transcend their specificity, becoming some of the most moving—and human—figures in world literature.
     `,
     Type: 'https://images-na.ssl-images-amazon.com/images/I/A1aDb5U5myL.jpg',
     Year: 'marwanamir.ma@gmail.com'
   });
 
    
     

     await game.save();
    //  await Memory.insert();
     
    //  console.log(Memory)
 }


// Routes

// server.get('/routeName', get;
// server.post('/addrouteName', add);
// server.delete('/deleterouteName/:id', delete);
// server.put('/updaterouteName/:id',update);


// Functions Handlers
// async function add(req, res) {
//   await ModelNAME.create({
   
//   });

//   ModelNAME.find({ authoremail: authoremail }, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send(result);
//     }
//   })

// }

// function delete(req, res) {

//   ModelNAME.deleteOne({}, (err, result) => {

//     ModelNAME.find({  }, (err, result) => {
//       if (err) {
//         console.log(err);
//       }
//       else {
//         res.send(result);
//       }
//     })

//   })


// }

// function get(req, res) {
//   ModelNAME.find({}, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send(result);
//     }

//   })
// }




// function update(req,res) {

//   ModelNAME.findByIdAndUpdate(id,{},(err,result)=>{
//     ModelNAME.find({authoremail:authoremail},(err,result)=>{
//           if(err)
//           {
//               console.log(err);
//           }
//           else
//           {
//               res.send(result);
//           }
//       })
//   })
// }

// routes 
async function addGameHandler(req,res){
   const Title=req.body.Title;
   const Poster=req.body.Poster;
   const Type=req.body.Type;
   const Year=req.body.Year;
   const email=req.body.email;

   await gamesModel.create({
     Title:Title,
       Poster:Poster,
       Type:Type,
       Year:Year,
       email:email
   })
   gamesModel.find({email:email},(err,result)=>{
    res.send(result);
        })
   
}


const gameData = require('./gameModule');


const staticMoviesFunction=require('./Static')
const moviesFunction=require('./Movies')

//MongoDB

// http://localhost:3001

server.post('/addGame',addGameHandler)

server.get('/movie', moviesFunction);

// http://localhost:3001/movie

server.get('/static', staticMoviesFunction);

// servers 

// http://localhost:3001/game?title=dota


server.get('/game', gameData);

server.get('/', (req, res) => {
    res.send('YOU are on THE home route')
});

server.get('*', (req, res) => {
    res.status(404).send({
        code: 404,
        message: 'Fix it'
    })
});



server.listen(PORT, () => {
    console.log(`GOOD to have you along on this ${PORT}`);
});






