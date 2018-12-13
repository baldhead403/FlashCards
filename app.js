const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()
let db



app.set('view engine','pug')
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static(__dirname + "/public"));


// MongoClient.connect("", (err,database)=>{
    // if(err) return console.log(err)

// })



app.get('/', function(req,res){
    
    res.render('index.pug')
})


// app.post(req,res ,(req,res)=> {

// })
   


app.listen(3000,function () {
    console.log('listening on port 3000')
})
