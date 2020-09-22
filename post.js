var express = require("express");
var app = express();
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
var friends = new Set([
  "UJJWAL",
  "rakesh",
  "monu",
  "saurav",
  "umesh",
  "chaubey",

  "lav",
  "ambuj",
]);
app.get("/", function (req, res) {
  res.render("posthome");
});

app.post("/newfriend", function (req, res) {
  var x = req.body.newone;
  friends.add(x);
  res.redirect("/addfriends");
});

app.get("/addfriends", function (req, res) {
  res.render("addfriends", { friends: friends });
});

app.listen(3020, function () {
  console.log("Example app listening on port 3000!");
});
