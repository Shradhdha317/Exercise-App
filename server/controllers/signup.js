const express = require('express');
const usermodel = require('../models/userModel');

const app = express.Router();

    app
        .get('/', (req, res)=>{
            res.send(usermodel.GetAllUser());         
        })
        .post('/', (req, res,next)=> { 
            usermodel.userRegister(req.body) 
            .then(user=> res.send(user))
            .catch(next);
        })
        .get('/:user_id',(req, res)=> {
            res.send(usermodel.GetUser(req.params.user_id) )
        })
        .delete('/:user_id', (req, res)=>{
             res.send(model.Deleteuser(req.params.user_id)) 
        })
        .post('/login', (req, res, next)=> { 
            usermodel.userLogin(req.body.username, req.body.password,req.body.isAdmin,req.body.type)
            .then(user=> res.send(user))
            .catch(next);
        })
        .post('/getUserDetails', (req, res, next)=> { 
            usermodel.getUserDetails(req.body.id)
            .then(user=> res.send(user))
            .catch(next);
        })
module.exports = app;