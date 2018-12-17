const express = require('express')
const app = express()
const path = require('path')
const bodyparser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
let db



app.set('view engine', 'pug')
app.use(bodyparser.urlencoded({ extended: true }))
app.use('/bootstrap', express.static(__dirname + '/node_modules/pug-bootstrap'))
app.use(express.static(__dirname + "/public"));


MongoClient.connect("mongodb://flashg:ming187@ds113703.mlab.com:13703/triviaflash", (err, database) => {
    if (err) return console.log(err)
    db = database.db('triviaflash')
})



app.get('/', function (req, res) {
    let cursor = db.collection('flashdata').find().toArray(function (err, result) {
        res.render('index.pug', {question:result})
        if (err) return console.log(err)
        
    })

})

app.post("/modal" ,(req,res)=> {
    console.log("post successful")
    db.collection('flashdata').save(req.body,(err,result)=> {
       
        res.redirect('/')
        console.log("Saved to database")
        })
})






app.listen(3000, function () {
    console.log('listening on port 3000')
})
