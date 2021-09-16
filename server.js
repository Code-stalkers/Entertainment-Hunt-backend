'use strict'
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
const axios = require('axios');
const PORT = 3001;

//MongoDB
// const mongoose = require('mongoose');


//// movie API key apikey=da2fe669
//// https://www.omdbapi.com/?t=SOMETHING&apikey=da2fe669 this is for serching for a movie title

// write an async function to use the api link like this
// const movieData = async function (req, res) {
//     let title = req.query.title;
//     let url = await`https://www.omdbapi.com/?t=${title}&apikey=da2fe669`;

//     await axios
//         .get(url)
//         .then(data => {

//             let newMovie = data.map(item => {
//                 return new Movie(item);
//             })
//           console.log(newMovie)
//             res.send(newMovie)

//         })
//         .catch(err => console.log(err))
// }

// class Movie {
//     constructor(apiitems) {
//         this.items
//     }
// }

//dont forget the route :
// server.get('/movie', movieData);




// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('');

//   const newSchema = new mongoose.Schema({
//     name: String,
  
//   });

//   ModelNAME = mongoose.model('collectionName', newSchema);

  //  seedData();
// }

//seeding a data function 
// async function seedData() {
//   const newmodels = new ModelNAME({


//   await newmodels.save();
 
// }


//Routes

// server.get('/routeName', get;
// server.post('/addrouteName', add);
// server.delete('/deleterouteName/:id', delete);
// server.put('/updaterouteName/:id',update);


//Functions Handlers
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