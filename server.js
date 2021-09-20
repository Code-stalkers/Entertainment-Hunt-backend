'use strict'

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
const axios = require('axios');
let PORT = process.env.PORT||3001;
server.use(express.json());






//game
const {gameData,getgameHandler,addingfavelist, addingcommentlist} = require('./gameModule');

server.get('/addgame', getgameHandler);

server.post('/addfavgame',addingfavelist)

server.put('/updateComment/:id',addingcommentlist);
//movie

const {addingWatchlist,staticMoviesFunction,getfilmssHandler}=require('./Static.js')

server.get('/addToWatchlist', getfilmssHandler);

server.post('/addToWatchlist',addingWatchlist)



const moviesFunction=require('./Movies')

//MongoDB

// http://localhost:3001

// server.post('/addGame',addGameHandler)

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


















//MongoDB
//  const mongoose = require('mongoose');
//  let gamesModel;
// //  let commentsModel;
//  main().catch(err => console.log(err));
 
// //  async function main() {
// //     await  mongoose.connect('mongodb://localhost:27017/game');
 
// //    const gameSchema = new mongoose.Schema({
// //      Title: String,
// //      Poster: String,
// //      Type: String,
// //      Year: String,
// //      email:String,
// //      comment:''
// //    });
// //   //  const commentsModel = new mongoose.Schema({
// //   //   Title: String,
// //   //   email: String,
// //   //   content: String
    
// //   // });
// //   //  commentsModel = mongoose.model('comments', commentsSchema);
// //    gamesModel = mongoose.model('game', gameSchema);
 
// //     //   seedData();
// //  }
 
//  //seeding a data function 
//  async function seedData() {
//     // const dataaa = require('./gameModule');
//     // let Memory = dataaa.Memory;
//     // Memory = new gamesModel
//     // Memory.loadDatabase();
//    const game = new gamesModel({
//      Title: 'War and Peace',
//      Poster: `War and Peace broadly focuses on Napoleon’s invasion of Russia in 1812 and follows three of the most well-known characters in literature: Pierre Bezukhov, the illegitimate son of a count who is fighting for his inheritance and yearning for spiritual fulfillment; Prince Andrei Bolkonsky, who leaves his family behind to fight in the war against Napoleon; and Natasha Rostov, the beautiful young daughter of a nobleman who intrigues both men.
//      A s Napoleon’s army invades, Tolstoy brilliantly follows characters from diverse backgrounds—peasants and nobility, civilians and soldiers—as they struggle with the problems unique to their era, their history, and their culture. And as the novel progresses, these characters transcend their specificity, becoming some of the most moving—and human—figures in world literature.
//      `,
//      Type: 'https://images-na.ssl-images-amazon.com/images/I/A1aDb5U5myL.jpg',
//      Year: 'marwanamir.ma@gmail.com'
//    });
//   //   const comment = new commentsModel({
//   //   Title: 'War and Peace',
//   //   email:  '',
//   //   content: ''
//   // });
 
    
     

//      await game.save();
//     //  await Memory.insert();
     
//     //  console.log(Memory)
//  }


// routes 
// async function addCommentsforGameHandler(req,res){
//   const Title=req.body.Title;
//   const email=req.body.email;

//   await gamesModel.create({
//     Title:Title,
//     email:email
//   })
//   gamesModel.find({email:email},(err,result)=>{
//    res.send(result);
//        })
  
// }
// server.post('/comments',addCommentsforGameHandler)

// async function addGameHandler(req,res){
//    const Title=req.body.Title;
//    const Poster=req.body.Poster;
//    const Type=req.body.Type;
//    const Year=req.body.Year;
//    const email=req.body.email;
//    const Comment=req.body.Comment;

//    await gamesModel.create({
//      Title:Title,
//        Poster:Poster,
//        Type:Type,
//        Year:Year,
//        email:email,
//        Comment : Comment
//    })
//    gamesModel.find({email:email},(err,result)=>{
//     res.send(result);
//         })
   
// }







// function updateGamewithCommentHandler(req,res) {
//   const id = req.params.id;
//   const Title = req.body.Title;
//   const Poster=req.body.Poster;
//   const Type=req.body.Type;
//   const Year=req.body.Year;
//   const email = req.body.email;
//   const comment=req.body.Comment;
  
  
//   gamesModel.findByIdAndUpdate(id,{Title,Poster,Type,Year,comment},(err,result)=>{
//     gamesModel.find({email:email},(err,result)=>{
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


// server.put('/updateCommentHandler/:id',updateGamewithCommentHandler);  

