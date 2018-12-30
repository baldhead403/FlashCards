const express = require('express')
const app = express()
const path = require('path')
const bodyparser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const objectId = require('mongodb').ObjectID
const assert = require('assert')
let db
let triviaCards = []


app.set('view engine', 'pug')
app.use(bodyparser.urlencoded({ extended: true }))
app.use('/bootstrap', express.static(__dirname + '/node_modules/pug-bootstrap'))
app.use(express.static(__dirname + "/public"));

MongoClient.connect("mongodb://flashg:ming187@ds113703.mlab.com:13703/triviaflash",{useNewUrlParser: true}, (err, database) => {
    if (err) return console.log(err)
    db = database.db('triviaflash');
    app.listen(3000, function () {
        console.log('listening on port 3000')
    })
})


app.get('/', function (req, res) {
    let cursor = db.collection('flashdata').find().toArray(function (err, result) {
        triviaCards = result
        res.render('index.pug')
        if (err) return console.log(err)
    })
})

app.get('/flashdata',function (req,res) {
    res.send(triviaCards)
    
    
})

app.post("/triviaflash" ,(req,res)=> {
    db.flashdata.insertMany(req.body,(err,result)=> {
        res.redirect('/')
        
    })
})
app.post("/update", (req,res)=> {
    let id = req.body.id
    let item ={
        question: req.body.question,
        hint: req.body.hint,
        answer: req.body.answer
    } 
    Mongo.connect(url, function (err,db) {
        assert.equal(null,err);
        db.collection('flashdata').updateOne({"_id": objectId(id)}, {$set:item}, function (err, result) {
            assert.equal(null,err);
            console.log('result')
            db.close()
        })
    })
    
    
}) 
app.post("/delete", (req,res)=> {
    id = req.body.id
    Mongo.connect(url, function (err,db) {
        assert.equal(null,err);
        db.collection('flashdata').updateOne({"_id": objectId(id)}, function (err, result) {
            assert.equal(null,err);
            console.log('item updated')
            db.close()
        })
    })
})
