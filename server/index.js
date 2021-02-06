const express = require('express');
const app = express();
const axios = require('axios');
const config = require('../config.js');

const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/games', (req, res) => {
  axios.request(config.requests.games).then(function (response) {
    res.send(response.data)
  }).catch(function (error) {
    console.error(error);
  });
  // console.log(config.standings)
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`)
});