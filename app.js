const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

const server = app.listen(port);

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/view/index.html");
});

app.get("/game", (req, res) => {
    res.sendFile(__dirname + "/view/game.html");
});

app.get("/credits", (req, res) => {
    res.sendFile(__dirname + "/view/credits.html");
});