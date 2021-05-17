const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors())

app.get('/', function (req, res) {
    res.json({message: "Hello there as you see"});
});

app.listen(5000, function () {
    console.log('App running on port 5000!');
});