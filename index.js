var express = require('express'),
    fs      = require('fs'),
    app     = express();

app.get('/', function(req, res) {
    console.log(req.path);
    res.type('html');
    res.send(fs.readFileSync('index.html'));
});

app.use(express.static(__dirname));

app.listen(3000);