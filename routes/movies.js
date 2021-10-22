const movies = require('express').Router();
const fs = require('fs');


movies.get('/movies', (res,req) => {
    db.query('SELECT * FROM movies', (err, data) => {
        if (err) {
          throw err;
        } else {
        //   console.log(data);
          res.json(data)
        }
      });

});

movies.post('/add-movie', (req,res) => {
   

});
movies.post('/update-revew', (req,res) => {



});


movies.delete('/')























module.exports = movies;