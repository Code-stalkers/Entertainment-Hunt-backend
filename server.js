
'use strict'

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
const axios = require('axios');
let PORT = process.env.PORT||3001;

//MongoDB
 const mongoose = require('mongoose');
 let gamesModel;
 let commentModel;

 main().catch(err => console.log(err));
 
 async function main() {
    //  await  mongoose.connect('mongodb://localhost:27017/game');
     await  mongoose.connect('mongodb://localhost:27017/comment');
   const gameSchema = new mongoose.Schema({
     Title: String,
     Poster: String,
     Type: String,
     Year: String
   });
   const CommentSchema = new mongoose.Schema({
    author: String,
    movie:String,
    content: String
  });
  commentModel = mongoose.model('comment', CommentSchema);
   gamesModel = mongoose.model('game', gameSchema);
  
          //  seedData();
 }
 
 //seeding a data function 
 async function seedData() {
    //  const dataaa = require('./Static');
    // let Memory = dataaa.Memory;
    // Memory = new gamesModel
    
    const comment1 = new commentModel ({
      author: "marwanamir.ma@gmail.com",
    content:  "This is my first comment on this forum so don't be a rude"

  });
  const comment2 = new commentModel ({
    author: "scarlett-jo",
  content:  "That's a mighty fine comment you've got there my good looking fellow..."

});
const comment3 = new commentModel ({
  author: "rosco",
content:  "What is the meaning of all of this 'React' mumbo-jumbo?"

});

 
   const game = new gamesModel({
     Title: 'War and Peace',
     Poster: `War and Peace broadly focuses on Napoleon’s invasion of Russia in 1812 and follows three of the most well-known characters
      in literature: Pierre Bezukhov, the illegitimate son of a count who is fighting for his inheritance and yearning for spiritual fulfillment;
       Prince Andrei Bolkonsky, who leaves his family behind to fight in the war against Napoleon; and Natasha Rostov, the beautiful young daughter of a nobleman who intrigues both men.
     A s Napoleon’s army invades, Tolstoy brilliantly follows characters from diverse backgrounds—peasants and nobility, civilians and soldiers—as they struggle with the problems unique to their era, their history, and their culture. And as the novel progresses, these characters transcend their specificity, becoming some of the most moving—and human—figures in world literature.
     `,
     Type: 'https://images-na.ssl-images-amazon.com/images/I/A1aDb5U5myL.jpg',
     Year: 'marwanamir.ma@gmail.com'

   });
     await comment1.save();
     await comment2.save();
     await comment3.save();
      await game.save();
 }
 function getcommentsHandler(req,res){
  const email = req.query.email;
  commentModel.find({author:email},(err,result)=>{
      if(err)
      {
          console.log(err);
      }
      else
      {
          res.send(result);
      }
  })
}
  

//  function name(){

//   console.log(server.get('/static', staticMoviesFunction));
//   // staticMoviesFunction().then(item => console.log(item))


//  }
//  name()
// Routes
   const staticMoviesFunction=require('./Static')
 server.get('/comment', getcommentsHandler);
// server.post('/game', getgameHandler);
// server.delete('/deleterouteName/:id', delete);
// server.put('/updaterouteName/:id',update);


// Functions Handlers

//  function  getgameHandler(req, res) {
//   const title = req.body.title;
//   const description = req.body.description;
//   const status = req.body.status;
//   const authoremail = req.body.authoremail;
//   // const { title, description, authoremail } = req.body;
//   await booksModle.create({
//     title: title,
//     description: description,
//     status: status,
//     authoremail: authoremail
//   });

//   booksModle.find({ authoremail: authoremail }, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send(result);
//     }
//   })

// }
  
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

const gameData = require('./gameModule');



const moviesFunction=require('./Movies')

//MongoDB

// http://localhost:3001

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






