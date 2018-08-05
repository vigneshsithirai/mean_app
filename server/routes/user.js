const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

var User = require('../models/user');
require('../models/customers');
var passport = require('passport');
var authendication = require('../controller/authendication');

/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

// create a new user called chris
// var chris = new User({
//     name: 'Chris',
//     username: 'sevilayha2',
//     password: 'password' 
//   });

// Get all posts
router.get('/posts', (req, res) => {

    // call the custom method. this will just add -dude to his name
    // user will now be Chris-dude
    // chris.dudify(function (err, name) {
    //     if (err) throw err;

    //     console.log('Your new name is ' + name);
    // });

    // call the built-in save method to save to the database
    // chris.save(function (err) {
    //     if (err) throw err;

    //     console.log('User saved successfully!');
    // });

    // Get posts from the mock api
    // This should ideally be replaced with a service that connects to MongoDB
    axios.get(`${API}/posts`)
        .then(posts => {
            res.status(200).json(posts.data);
        })
        .catch(error => {
            res.status(500).send(error)
        });
});

router.post('/signup', (req, res) => {
    authendication.register(req, res);
});

router.post('/login', (req, res) => {
    authendication.login(req, res);
})

module.exports = router;