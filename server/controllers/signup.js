const express = require('express');
const usermodel = require('../models/userModel');

const app = express.Router();

    app
        .get('/', (req, res)=>{
            res.send(usermodel.GetAllUser());         
        })
        .post('/', (req, res)=> { 
            res.send( usermodel.userRegister(req.body) );
        })
        .get('/:user_id',(req, res)=> {
            res.send(usermodel.GetUser(req.params.user_id) )
        })
        .delete('/:user_id', (req, res)=>{
             res.send(model.Deleteuser(req.params.user_id)) 
        })

module.exports = app;