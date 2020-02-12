// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("/api/notes", (req, res) => {
    return res.json(tables);
});

app.post("/api/notes", (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    const newTable = req.body;
  
    if (tables.length < 5 && tables.length >= 0) {
        tables.push(newTable);
    } 
    else if (tables.length >= 5) {
        waitlist.push(newTable);
    }
  
    res.json(newTable);
  });

// =============================================================

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});  