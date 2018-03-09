const express = require('express');
const request = require('request');

const app = express();

app.use(express.static('client'));

app.get('/', (req, res) => res.send('Hello World!'));

const port = process.env.PORT || 3050;

app.listen(port);


app.get('/pictures/:id', (req, res) => {
  request.get(`http://foodigopictures.us-west-1.elasticbeanstalk.com/${req.path}`).pipe(res);
});

app.get('/information/:id', (req, res) => {
  request.get(`http://foodigosidebar-env.us-east-2.elasticbeanstalk.com/${req.path}`).pipe(res);
});

app.get('/restaurants/:restaurantId/reviews', (req, res) => {
  request.get(`http://foodigoreviews.us-west-1.elasticbeanstalk.com/${req.path}`).pipe(res);
});

app.get('/title/:id', (req, res) => {
  request.get(`http://foodigotitle-env.us-west-1.elasticbeanstalk.com/${req.path}`).pipe(res);
});

app.get('/map/:id', (req, res) => {
  request.get(`http://foodigotitle-env.us-west-1.elasticbeanstalk.com/${req.path}`).pipe(res);
});

module.exports = app;
