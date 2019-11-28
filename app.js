var express = require("express");
var app = express();
var path = require("path");

app.get("/", (req, res) => {
    res.redirect('/dist/index.html');
});

app.listen(3000);