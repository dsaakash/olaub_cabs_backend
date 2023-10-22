const express = require('express');


const user_route = express();




//  body-parser

const bodyParser  = require('body-parser');
user_route.use(bodyParser.json());


user_route.use(bodyParser.urlencoded({extended:true}));


// controller 

const usercontroller = require('../controller/UserController');



//routes

user_route.post('/register',usercontroller.register);

user_route.post('/login',usercontroller.login);

module.exports = user_route;