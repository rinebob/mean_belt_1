var express = require('express');
var app = express();
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(express.static(__dirname + '/client/static/img'));
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var path = require('path');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ang_authors');
require('./server/models/author.js')
require('./server/config/routes.js')(app)


app.all("*", (req,res,next) => {

res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, function() {
	console.log("listening on port 8000");
})