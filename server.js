const express = require("express");
const helmet = require("helmet");

const taskRouter = require("./routers/taskRouter");
const server = express();

server.use(express.json());
server.use(helmet());

server.use("/api/tasks", taskRouter);

server.get("/", (req, res) => {
  res.send("Ready to PASS THIS SPRINT? GO GIRL!");
});

module.exports = server;
