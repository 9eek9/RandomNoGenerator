const { Console } = require('console');
const express = require('express');
const path = require('path');
const appServer = express();

const host = 'localhost';
const port = 8082;

var bodyParser = require("body-parser");
appServer.use(bodyParser.urlencoded({ extended: false }));

appServer.use(express.static('public'));

appServer.get('/RandomNoGenerator',(req, res)=>{
    res.sendFile(__dirname + "/" + 'RandomNoGenerator.html');
});

appServer.post('/submit-RandomNoCount', (req, res)=> {
    var count = req.body.Count;
    let randonNo = '';

    for (let i = 0; i < count; i++){
        randonNo = randonNo + generateRandomNo(1, 100000) + ', ';
    }
    
    res.send('Random Numbers is/are ' + randonNo );
});

appServer.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

function generateRandomNo(min, max){
    return Math.floor(
        Math.random() * (max - min + 1) + min  // inclusive of min & max
        //Math.random() * (max - min) + min // exclusive of min & max
    );
}

