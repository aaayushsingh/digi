var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen(process.env.port || 3000, (res, err) => {
  console.log("chal raha hai");
});
