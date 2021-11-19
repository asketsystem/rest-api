//TODO: requiring express into our system 
const express = require('express');
const app = express();

// we will set up a GET function 
app.get('/api', (req, res) => res.send('Its working!'));


app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});