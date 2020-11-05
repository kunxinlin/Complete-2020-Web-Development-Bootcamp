const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res){
  const query = req.body.cityName;
  const apiKey = "a13958bba023d8818f3ef839cfe48cc7"
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid=" + apiKey + "&units=metric";
  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
      //console.log(data); //pretty useless, gives out data in hex
      const weatherData = JSON.parse(data)
      //console.log(weatherData)

      const temp = weatherData.main.temp
      console.log(temp)

      const description = weatherData.weather[0].description
      console.log(description)

      const icon = weatherData.weather[0].icon
      const imageURL = "http://openweathermap.org/img/wn/"+ icon +"@2x.png"
      res.write("<p>The weather is currently "+ description + "<p>");
      res.write("<h1>The temperature in "+ query +" is " + temp + "</h1>")
      res.write("<img src=" + imageURL +">")
      res.send(); // can only have 1 .send in an app method, so use .write to send multiple lines of html

    })
  })
})


app.listen(3000, function(){
  console.log("Server is running on port 3000.")
})
