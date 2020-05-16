const express = require('express');
const app = express();
const url = 'https://www.metaweather.com/api';
const fetch   = require('node-fetch');

app.get('/location/:woeid', (req, res) => {   
  fetch(url + '/location/' + req.params.woeid)
  .then(res => res.json())
  .then(data => {
      res.send({ data });
  })
  .catch(err => {
      res.send(err);
  });
});

app.get('/hi', (req, res) => {
    res.send('hello');
})

const server = app.listen(4000, function () {
    const host = server.address().address
    const port = server.address().port
    
    console.log("App listening at http://%s:%s", host, port)
});
