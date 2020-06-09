const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({limit: '100mb', extended: true, parameterLimit:100000});
const http = require('http');
const server = http.createServer(app);
const jwtRouteAuth = require('./helper/jwtAuthentication.js');
const fileUpload = require('express-fileupload');

const config = require('./database');
const routes = require('./router');

const mongoose = require('mongoose');
app.use(express.urlencoded({extended: false}));

//cors
app.use(cors());

// Bordy parser
app.use(bodyParser.json({limit: '100mb'}));
app.use(urlencodedParser);


app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));

// Authenticate Requests to the api
// app.use(jwtRouteAuth());

const logRequestStart = (req, res, next) => {
  console.info(`${req.method} ${req.originalUrl}`);

  res.on('finish', () => {
      console.info(`${res.statusCode} ${res.statusMessage}; ${res.get('Content-Length') || 0}b sent`)
  });

  next()
};

app.use(logRequestStart);

// Connecting to database
mongoose.connect(config.mongo.url, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }).then(r =>{
  console.log('Database Connected...');
}).catch(r =>{ console.log('Database Not Connected!!')});



routes.register(app);


// Listening to port
server.listen(4242, () => {
  console.log('Server running on localhost: 4242');
});

module.exports = app;
