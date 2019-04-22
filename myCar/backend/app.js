const express = require('express');//?to expose the REST end points
require('./config/config');
const bodyParser = require('body-parser');

const app = express();

const { carRouter } = require('./routes/car.routes');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

  app.use(bodyParser.json());

app.use(express.json());

app.use("/api", carRouter);



app.listen(5000);
console.log("Server Listening")