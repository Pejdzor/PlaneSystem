const express = require('express');
const app =express();

app.get('/',(req,res,next)=>{
    res.json({
        'status':'git'
    });
});

app.listen(8080,()=>{
    console.log('Listening!');
});