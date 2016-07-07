//import express and create app object for usage
var express = require('express');
var app = express();
/*
 * Function to respond to get request for /
 */
app.get('/', function(request, response) {
  //send response back to page
  response.send('Hello World');
});
//start the server with port and ip
app.listen(process.env.PORT, process.env.IP);
