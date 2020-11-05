const express = require("express");
const app = express();

const bodyParser = require("body-parser");
//urlencoded parse data from a html form
//extended allows us to post nested object
app.use(bodyParser.urlencoded({extended: true}));


//specify the get request when a computer makes a request to our server
//the callback function contains all the info from a request and the response is what we want to send back
app.get("/hello", function(request, response){
  response.send("Hello");
});

//cant use relative location, since when its deployed on another computer(server) it has no idea the path.
// __dirname gives current filepath of this file.
app.get("/", function(req, res){
  res.sendFile(__dirname +"/index.html");
});

app.post("/", function(req, res){

// req body data gets passed in as text so need to convert to Number
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("result =" + result);
});

//can add a callback function when the server is running
app.listen(3000, function(){
  console.log("Server started on port 3000");
});
