import express from 'express';
import bodyParser from 'body-parser';
import Router from './routes/api';
import mongoose from 'mongoose';
import morgan from 'morgan';
import jwt from 'jsonwebtoken';

//express app
const app = express();

// mongodb
mongoose.connect('mongodb://localhost/arka');
mongoose.Promise = global.Promise;

// secret
app.set('superSecret', "thisismyarkasecret");

//middleware body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// log requests on console
app.use(morgan('dev'));

//routes
app.use('/', Router);

// error handling middleware
app.use( (err, req, res, next) => {
  res.status(422).send({error: err.message})
});

// app listenig for requests
app.listen(3000, () => {
  console.log("listening for requests");
});

export default app;
