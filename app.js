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

const socket = require("socket.io");
const io = socket(server);

const comments = new Array();

io.on("connection", socket => {
    let data = {
        comments,
    }
    socket.emit("comments", data);

    socket.on("comment", data => {
        if(data.comment != "")comments.push(data.comment);
    });
});