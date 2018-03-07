const express = require('express');
const request = require('request');

const app = express();

app.use(express.static('client'));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3010);


app.get('/pictures/:id', (req, res) => {
  request.get(`http://localhost:3000${req.path}`).pipe(res);
});

app.get('/information/:id', (req, res) => {
  request.get(`http://localhost:3400${req.path}`).pipe(res);
});

app.get('/restaurants/:restaurantId/reviews', (req, res) => {
  request.get(`http://localhost:8001${req.path}`).pipe(res);
});

app.get('/title/:id', (req, res) => {
  request.get(`http://localhost:3001${req.path}`).pipe(res);
});

app.get('/map/:id', (req, res) => {
  request.get(`http://localhost:3001${req.path}`).pipe(res);
});

module.exports = app;
