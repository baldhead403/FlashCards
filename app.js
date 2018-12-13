const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()
let db



app.use('view engine','pug')
app.use(bodyparser.urlencoded({extended:true}))


MongoClient.connect("", (req,res)=>{


})



app.get('/', function(req,res){
    console.log()

})


app.post(req,res ,function(req,res) {
    res.render('/')

})
   


app.listen(3000,function () {
    
})
