require ('dotenv').config();
const functions = require('firebase-functions');
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
// const PORT = process.env.PORT || 3001;
const app = express();

// configure middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
const apiRoutes = require('./routes/apiRoutes');
app.use('/', apiRoutes);

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || process.env.MONGO_URI;

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

exports.app = functions.https.onRequest(app);