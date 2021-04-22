const express = require('express');
const multer = require("multer");
const path = require('path');

const exerciselist = [
    { 
        id:1,
        file: "images/event/event1.jpg",
        title: "Gym Time",
        description: "Just crushed this workout.",
        time: '7:00PM',
        date:'07 Feb',
    },
    { 
        id:2,
        file: "images/event/event4.jpg",
        title: "Morning Exercise",
        description: "Go for it.",
        time: '9:00AM',
        date:'3 March',
    },
    { 
        id:3,
        file: "images/event/event3.jpg",
        title: "Stretching Exercise",
        description: "Fit and fab!",
        time: '10:00PM',
        date:'02 Jan',
    },
    { 
        id:4,
        file: "images/event/event2.jpg",
        title: "Stretch Your Body",
        description: "Do something today that your future self will thank you for.",
        time: '5:00PM',
        date:'27 Feb',
    }, 
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

        const exercise = {
            id:exerciselist.length+1,
            title: req.body.title,
            description: req.body.description,
            time: req.body.time,
            date: req.body.date,
            file: req.file.filename,
        }

        console.log(exercise);

        let response = exerciselist.push(exercise);
        return res.json(response)  
  });
app.get('/getExercise',(req, res)=>{
    res.send(exerciselist);
})
// app.post('/getActivityuserwise', (req, res)=>{
//     const activityL = [];
//     for(var i=0;i<activitylist.length;i++)
//     {
//         console.log(req.body.id);
//         console.log(activitylist[i].id);
//         if(req.body.id == activitylist[i].id)
//         {
//             activityL.push(activitylist[i]);
//         }
//     }
//     res.send(activityL);         
// })

app.delete('/', (req, res)=>{
   
    for(var i=0;i<exerciselist.length;i++)
    {
        if(req.body.id == exerciselist[i].id)
        {
            exerciselist.splice(i,1);
            break;
        }
    }
    res.send({status:1});         
})
  module.exports = app;