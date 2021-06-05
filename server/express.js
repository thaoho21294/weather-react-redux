const express = require('express')
const app = express()
// eslint-disable-next-line camelcase
const base_url = 'https://www.metaweather.com/api'
const fetch = require('node-fetch')

app.get('/location/search', (req, res) => {
  // eslint-disable-next-line camelcase
  fetch(base_url + '/location/search/?query=' + req.query.query)
    .then(res => res.json())
    .then(data => {
      res.send({ data })
    })
    .catch(err => {
      res.send(err)
    })
})

app.get('/location/:woeid', (req, res) => {
  // eslint-disable-next-line camelcase
  fetch(base_url + '/location/' + req.params.woeid).then(res => res.json()).then(data => { res.send({ data }) }).catch(err => { res.send(err) })
})

app.get('/location/:woeid/:date', (req, res) => {
  const { woeid, date } = req.params
  const year = date.slice(0, 4)
  const month = parseInt(date.slice(4, 6))
  const day = parseInt(date.slice(6, 8))
  // eslint-disable-next-line camelcase
  fetch(`${base_url}/location/${woeid}/${year}/${month}/${day}`)
    .then(res => res.json())
    .then(data => {
      res.send({ data })
    })
    .catch(err => {
      res.send(err)
    })
})

const server = app.listen(4000, function () {
  const host = server.address().address
  const port = server.address().port
  console.log('App listening at http://%s:%s', host, port)
})
