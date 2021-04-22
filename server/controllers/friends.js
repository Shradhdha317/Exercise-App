const express = require('express');
const usermodel = require('../models/userModel');
const app = express.Router();
    app
       
         .post('/activefriendList', (req, res, next)=> { 
            usermodel.getActiveUser(req.body.id)
            .then(user=> res.send(user))
            .catch(next);
        })
        
         .post('/deactivefriendList', (req, res, next)=> { 
            usermodel.getDeactiveUser(req.body.id)
            .then(user=> res.send(user))
            .catch(next);
        })
        .post('/sendRequest', (req, res, next)=> { 
            usermodel.sendRequest(req.body.id,req.body.user_id)
            .then(user=> res.send(user))
            .catch(next);
        })
        .post('/showRequest', (req, res, next)=> { 
            usermodel.showRequest(req.body.id)
            .then(user=> res.send(user))
            .catch(next);
        })
        .post('/acceptRequest', (req, res, next)=> { 
            usermodel.acceptRequest(req.body.id,req.body.user_id)
            .then(user=> res.send(user))
            .catch(next);
        })
        
        
         
module.exports = app;