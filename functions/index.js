require ('dotenv').config();
const functions = require('firebase-functions');
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require('mongoose');
// const PORT = process.env.PORT || 3001;
const app = express();

// configure middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("build"));
}

// Routes
const apiRoutes = require('./routes/apiRoutes');
app.use('/', apiRoutes);

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Connect to the Mongo DB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./build/index.html"));
});

exports.app = functions.https.onRequest(app);