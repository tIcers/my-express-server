const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 3000

app.get('/', (req,res) => {
    res.send('<h1>My home route</h1>')
})

app.get('/contact', function(req,res){
    res.send('Contact me here: xxxxxxxxx@gmail.com')

})

app.get('/about',function(req,res){
    res.send("<h3>Hello, my name is Atsuki  I am from japan! I am intersted in backend development</h3>")

})

app.get('/programming', function(req,res){
    res.send("<ul><li>Python</li><li>Javascript</li><li>java</li><li>C</li>")
})

app.listen(3000, function(){
    console.log("Server started on port 3000")
});