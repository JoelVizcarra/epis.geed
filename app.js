var express = require("express");
var app = express();
var path = require("path");
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
  //__dirname : It will resolve to your project folder.
});
app.get("/about", function(req, res) {
  res.sendFile(path.join(__dirname + "/about.html"));
  //__dirname : It will resolve to your project folder.
});
app.get("/src/hashes.js", function(req, res) {
  res.sendFile(path.join(__dirname + "/src/hashes.js"));
  //__dirname : It will resolve to your project folder.
});
app.listen(process.env.PORT || 3000);
console.log("Server running");
