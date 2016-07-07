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
/*
* Function that responds to /first/last request
*/
app.get('/:firstname/:lastname', function(request, response) {
  //get firstname and last name from request
  var first = request.params.firstname;
  var last = request.params.lastname;
  //send responce back
  response.send(['Hello', first, last].join(' '));
});
//start the server with port and ip
app.listen(process.env.PORT, process.env.IP);
