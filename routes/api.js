import express from 'express';
import {Order, User} from '../models/schema';
import jwt from 'jsonwebtoken';
import app from '../index';

const Router = express.Router();


// Order Routes
Router.get('/orders', (req, res) => {
  Order.find({}).then( (orders) => {
    res.send(orders);
  });
});

Router.get('/orders/:id', (req, res) => {
  console.log(req.params.id);
  Order.find({userId: req.params.id}).then( (orders) => {
    res.send(orders);
  });
});

Router.post('/orders', (req, res, next) => {
  Order.create(req.body).then( (order) => {
    console.log(order);
    res.send(order);
  }).catch(next);
});

Router.put('/orders/:id', (req, res, next) => {
  Order.findByIdAndUpdate({_id: req.body._id}, req.body).then( () => {
    Order.findOne({_id: req.body._id}).then( (order) => {

      res.send(order);
    });
  }).catch(next);
});

Router.delete('/orders/:id', (req, res) => {
  Order.findByIdAndRemove({_id: req.params.id}).then( (order) => {
      res.send(order);
  });
});


// User Routes

// Setting up admin
Router.get('/setup', (req, res, next) => {
  User.create({
    name: "vincent",
    password: "password",
    admin: true
  }).then( (user) => {
    res.send(user);
  }).catch(next);
});

// Signup!
Router.post('/signup', (req, res, next) => {

  User.create(req.body).then( (user) => {
    res.send(user);
  }).catch(next);
});

// For Testing, get all users
Router.get('/users', (req, res) => {
  User.find({}).then( (users) => {
    res.send(users);
  });
});

Router.get('/users/:id', (req, res) => {
  User.findById({_id: req.params.id}).then( (user) => {
    res.send(user);
  });
});


// User Auth Routes
Router.post('/login', (req, res, next) => {
  User.findOne({name: req.body.name}, (err, user) => {

    if (!user) { //user doesnt exist
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      if (user.password != req.body.password) { //validating password
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        let token = jwt.sign(user, app.get('superSecret'), {
            expiresIn: 60*60*24 // expires in 24 hours
          });
          res.send(user);
      }
    }
  });
});

export default Router;
