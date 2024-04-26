var express= require("express")
var bodyParser= require("body-parser")
var mongoose= require("mongoose")

const app=express() //starts express.js

app.use(bodyParser.json())
app.use(express.static('../frontend/Components/Login'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/mydb');

var db= mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to database"));
db.once('open',()=>console.log("Connected to database"));

app.post("/sign-up",(req,res)=>{
    var name=req.body.name;
    var password=req.body.password;
    var email=req.body.email;

    var data={
        "name":name,
        "password":password,
        "email":email
    }

    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("record inserted");
    });

    return res.redirect('http://localhost:8080/')
})

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.redirect('http://localhost:8080/')
}).listen(3200);

console.log("listening at port");
