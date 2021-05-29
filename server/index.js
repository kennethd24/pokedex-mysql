// TODO: Create an express server
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;
const db = require('./db/index.js')

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/pokemon', (req, res) => {
  // name, picture, and type
  let queryStr = `Select pokemon.id, pokemon.name, images.img, types.type from pokemon INNER JOIN images on pokemon.imageNum = images.id INNER JOIN types on pokemon.typeNum = types.id`;
  db.query(queryStr, (err, results) => {
    err ? res.status(404).send(err) : res.status(200).send(results)
  })
})

app.listen(port, err => {
  err ? console.log('Not listening') : console.log('We in this bitch')
})