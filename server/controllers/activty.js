const express = require('express');
const multer = require("multer");
const path = require('path');
const usermodel = require('../models/userModel');

const activitylist = [
    { 
    activity_id: '1',
    activity_type: 'public',
    activity_name: 'A',
    activity_desc: 'Xyz',
    activity_place: 'A',
    file:'1601660004690.jpg',
    id:2
    }
];
const app = express.Router();
let storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => {
        const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
        if (!allowedTypes.includes(file.mimetype)) {
        const error = new Error("Incorrect file");
        error.code = "INCORRECT_FILETYPE";
        return cb(error, false)
        }
        const unamefile = `${Date.now()}${path.extname(file.originalname)}`
        cb(null, unamefile)
    }
});
  
let upload = multer({
    storage,
    limits: { fileSize: 1000000 * 100 }
}) 
  
app.post('/', upload.single('file'), (req, res) => {
        // validate req
        if (!req.file) {
            return res.json({ error: 'All Fields Are Required' });
        }

        const activity = {
            activity_id:activitylist.length+1,
            activity_type: req.body.activity_type,
            activity_name: req.body.activity_name,
            activity_desc: req.body.activity_desc,
            activity_place: req.body.activity_place,
            file: req.file.filename,
            id:req.body.id
        }

        console.log(activity);

        let response = activitylist.push(activity);
        return res.json(response)  
  });
app.get('/getActivityadmin',(req, res)=>{
    const userList = usermodel.GetAllUser();
    const activityL = [];
   
    for(var i=0;i<activitylist.length;i++)
    {
        for(var k = 0;k<userList.length;k++)
        {
            if(userList[k].id == activitylist[i].id)
            {
                username = userList[k].fname;
                break;
            }
        }
        var user  = '';
        user = {
            activity_id: activitylist[i].activity_id,
            activity_type: activitylist[i].activity_type,
            activity_name: activitylist[i].activity_name,
            activity_desc: activitylist[i].activity_desc,
            activity_place: activitylist[i].activity_place,
            file:activitylist[i].file,
            username:username
        };   
        activityL.push(user); 
        console.log(activityL);
    }
    console.log(activityL);
    res.send(activityL);
})
app.post('/getActivityuserwise', (req, res)=>{
    const activityL = [];
    for(var i=0;i<activitylist.length;i++)
    {
        console.log(req.body.id);
        console.log(activitylist[i].id);
        if(req.body.id == activitylist[i].id)
        {
            activityL.push(activitylist[i]);
        }
    }
    res.send(activityL);         
})
app.post('/getActivityuserrelated', (req, res)=>{
    const activityL = [];
    for(var i=0;i<activitylist.length;i++)
    {
        if(req.body.id == activitylist[i].id && activitylist[i].activity_type=='public')
        {
            activityL.push(activitylist[i]);
        }
    }
    res.send(activityL);         
})

app.delete('/', (req, res)=>{
   
    for(var i=0;i<activitylist.length;i++)
    {
        if(req.body.id == activitylist[i].activity_id)
        {
            activitylist.splice(i,1);
            break;
        }
    }
    res.send({status:1});         
})
  module.exports = app;