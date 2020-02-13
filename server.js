// Dependencies
const express = require("express");
const fs = require("fs");
const path = require('path');

// Express
const app = express();
const PORT = process.env.PORT ||8000;

// can load the files that are in the public directory from the /static path prefix
app.use(express.static(path.join(__dirname, "public")));
//automatically puts ./ in front of file names
app.use(express.static("./"));
app.use(express.static("./public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("WE ARE DOING IT LIVE ON PORT: " + PORT);
});