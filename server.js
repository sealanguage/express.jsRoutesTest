const express = require('express');    //  
const app = express();    //  create an app and put it into this variable
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extend: false}));   //  telling express how the code is coming in
app.use(bodyParser.json())  //  parse all code coming in to json

app.get('/', (reqeust, response) => response.send('<h1>hello</h1>'))

app.get('/test', (req, res) => res.send('<h1>test route</h1>'))

// app.get('/test/:num', (req, res) => res.send(req.params.num))

app.get('/test/add/:num', (req, res) => {
    const num = parseInt(req.params.num, 10)
    res.send(`${5 + num}`)
})

app.get('/test/subtract', (req, res) => {
    console.log(req.query)
    const num = parseInt(req.query.num, 10)
    res.send(`${num - 5}`)
})

app.post(`/test/multiply`, (req, res) => {
    const num = parseInt(req.body.num, 10);
    res.json({result: num * 5})    // changing the response to json 
})

const port = process.env.PORT || 5000;       //  use environment variable to tell the app what port number to listen to

app.listen(port, () => console.log(`App listening o port: ${port}`))

