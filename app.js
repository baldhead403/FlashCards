const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()
let db



app.set('view engine','pug')
app.use(bodyparser.urlencoded({extended:true}))
app.use('/bootstrap',express.static(__dirname + '/node_modules/pug-bootstrap'))
app.use(express.static(__dirname + "/public"));


MongoClient.connect("mongodb://flashg:ming187@ds113703.mlab.com:13703/triviaflash", (err,database)=>{
    if(err) return console.log(err)
    db = database.db('flashg')
})



app.get('/', function(req,res){
    let cursor = db.collection('flashg').find().toArray(function (err,result) {
        if(err) return console.log(err) 
        res.render('index.pug', {question:question},{hint:hint},{answer:result})
    })
    
})


app.post(req,res ,(req,res)=> {
    console.log("post successful")
    db.collection('flashg').save(req.body,(err,result)=> {
        res.redirect('/')
        console.log("Saved to database")
        })
})
   


app.listen(3000,function () {
    console.log('listening on port 3000')
})
