var express=require('express');
var app=express();
var router=require('./router/router')

var port=3000;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./database/database')
app.use('/',router);
// app.get("/",(req,res)=>{
//         res.send("Hello World")
// })
app.listen(port,()=>{
        console.log("serving on port: "+port)
})