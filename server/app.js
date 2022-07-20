require("dotenv").config();
const { ENVIROMENT } = process.env;
const express = require("express");
const morgan = require("morgan");
// import session = require('express-session');
const cookieSession = require("cookie-session");
const cors = require("cors");

const ws = require("ws");
// const httpServer = require("http");
// const socketIO = require("socket.io");
// db connection
const db = require("./configs/db.config");

// routes import
const usersRoutes = require("./routes/usersRoutes");
const tasksRoutes = require("./routes/tasksRoutes");
const projectsRoutes = require("./routes/projectsRoutes");
const userRoutes = require("./routes/userRoutes");
// const messagesRoutes = require("./routes/messageRoutes");

const PORT = 8080;
const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
// middleware setup
app.use(morgan(ENVIROMENT));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  cookieSession({
    name: "session",
    keys: ["id"],
  })
);

// routes
app.use("/users", usersRoutes(db));
app.use("/api/tasks", tasksRoutes(db));
app.use("/api/projects", projectsRoutes(db));
app.use("/user", userRoutes(db));

// where db r/w could go
const chatMessages = [];
const wsServer = new ws.Server({ noServer: true });
wsServer.on("connection", (socket) => {
  // Send the full list of messages so far as soon as the client connects
  socket.send(JSON.stringify(chatMessages));

  socket.on("message", (message) => {
    /*
    Stuff you can do when you receive a message:
      • Console log it
      • Broadcast it to everybody in the chat
      • Write it to a database
    */
    console.log("*** " + message);
    // save to array
    chatMessages.push(JSON.parse(message));

    // log of messages everyone can see
    wsServer.clients.forEach((client) => {
      if (client.readyState === socket.OPEN) {
        client.send(JSON.stringify(chatMessages));
      }
    });
  });
});

const server = app.listen(PORT, () =>
  console.log(`Server is listening on port ${PORT}`)
);
server.on("upgrade", (request, socket, head) => {
  wsServer.handleUpgrade(request, socket, head, (socket) => {
    wsServer.emit("connection", socket, request);
  });
});
