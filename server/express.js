const express = require('express');
const app = express();
const base_url = 'https://www.metaweather.com/api';
const fetch   = require('node-fetch');

app.get('/location/search', (req, res) => {
    fetch(base_url + '/location/search/?query=' + req.query.query)
    .then(res => res.json())
    .then(data => {
        res.send({ data });
    })
    .catch(err => {
        res.send(req.query.query);
    });
});

app.get('/location/:woeid', (req, res) => {   
  fetch(base_url + '/location/' + req.params.woeid)
  .then(res => res.json())
  .then(data => {
      res.send({ data });
  })
  .catch(err => {
      res.send(err);
  });
});

const server = app.listen(4000, function () {
    const host = server.address().address
    const port = server.address().port
    
    console.log("App listening at http://%s:%s", host, port)
});
