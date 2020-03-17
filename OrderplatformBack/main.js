const express = require("express");
const bodyParser = require("body-parser");
const Mongo = require("./MongoFunc/main");
const price = require('./Reqict/repict');
const app = new express();


let  jsonParser = bodyParser.json(); //用于post

let urlencodeParser = bodyParser.urlencoded({extended:false});  //用于get


app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.post("/sign",jsonParser,function(req,res) {
    let username = req.body.username,
        password = req.body.password;
    Mongo.check("signlist","sign",{"username":username,"password":password},function(data){
        console.log(1);
        if(typeof data == 'object'){
            if(data.length == 0){
                res.json({"result" : false})
            }else{
                res.json({"result" : true})
            }
        }
    });
})

app.get('/getPrice',urlencodeParser, (req,res) => {
    console.log(1);
    let newUrl = req.query;
    let newPrice = price.getPrice(newUrl.newUrl,function(val) {
        res.json({price:val})
    });
    
})

app.get("/test",function(req,res){
	res.send("hello owlrd")
})


app.listen(8000);





