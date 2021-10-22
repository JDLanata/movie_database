const mysql = require('mysql2');
const express = require("express");
// const movies = require('./routes/movies');

const PORT = process.env.PORT || 4000

const app = express()


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// app.use('/api', movies);


const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'password',
      database: 'movie_db',
    },
    console.log(`Connected to the registar_db database.`)
  );

  app.get("/api/movies",(req,res)=>{
    db.query('SELECT * FROM movies', (err, data) => {
        if (err) {
          throw err;
        } else {
        //   console.log(data);
          res.json(data)
        }
      });
  })

  app.post("/api/add-movies",(req,res)=>{
    db.query('INSERT INTO movies (movie_name) VALUES (?)',req.body.movie_name,(err, data) => {
        if (err) {
          throw err;
        } else {
        //   console.log(data);
          res.json({message: "success"})
        }
      });
  })

  app.listen(PORT,()=>{
      console.log(`listenin to the smooth sounds of port ${PORT}`)
  })
  