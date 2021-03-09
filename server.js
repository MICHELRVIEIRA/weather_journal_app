// Setup empty JS object to act as endpoint for all routes

let  projectData = [];

// Require Express to run server and routes

// Installed from command "npm install express"

const express = require('express');

// Start up an instance of app

const app = express();

/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.

// Installed from command "npm install body-parser"

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// Cors for cross origin allowance

// Installed from command "npm install cors"

const cors = require('cors');

app.use(cors());

// Initialize the main project folder

app.use(express.static('./website'));

// Setup Server

const port = 3000;

const server = app.listen(port, listening);

function listening() {
    console.log("Server running.");
    console.log(`Running on localhost: ${port}`);
}

// GET route

app.get('/all', getData);
  
function getData(req, res) {
    res.send(projectData);
    console.log(projectData);
}
  
// POST route
  
app.post('/addWeather', addWeather);
  
function addWeather(req,res){
   
    newEntry = {
      temperature: req.body.temperature,
      date: req.body.date,
      content: req.body.content
    }
  
    projectData.push(newEntry)
    res.send(projectData)
    console.log(projectData)

  }