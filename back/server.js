const app = require('./app');

app.set('port',process.env.PORT || 8080);

const server=app.listen(app.get('port'),()=>{
    console.log("Server is running");
})

app.get("/api",(req,res)=>{
    res.json({"msg":"Wazzup Nibba"});
})