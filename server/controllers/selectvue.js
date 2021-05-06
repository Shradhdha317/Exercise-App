const selectlist = [
    { 
        searchtext:'vijay'
    },
    { 
        searchtext:'shradhdha'
    },
    { 
        searchtext:'ridhi'
    },
    { 
        searchtext:'vishal'
    },
    { 
        searchtext:'virin'
    },
    { 
        searchtext:'vihana'
    },
    { 
        searchtext:'rinku'
    },
    { 
        searchtext:'ruchi'
    },
    { 
        searchtext:'dimple'
    },
    { 
        searchtext:'apple'
    },
    { 
        searchtext:'ball'
    },
    { 
        searchtext:'cat'
    },
    { 
        searchtext:'dog'
    },
    { 
        searchtext:'elephant'
    }
];
const express = require('express');
const app = express.Router();
app.get('/',(req, res)=>{
    res.send(selectlist);
})
module.exports = app;