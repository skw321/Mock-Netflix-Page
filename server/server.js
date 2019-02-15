const express = require("express");
const bodyParser = require('body-parser');
const movies = require('../public/movies.json')

const port = process.env.PORT || 8888;

const app = express();

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	console.log("request url" + req.url);
	next();
})


// Define a handler to handle GET request at '/'

app.get('/movies', function (req, res) {
	res.status(200).json({ movies });
});


app.listen(port, () => {
	console.log("Express App started");
});
