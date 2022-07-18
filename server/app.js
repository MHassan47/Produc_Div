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
// const messagesRoutes = require("./routes/messageRoutes");

const PORT = 8080;
const app = express();
// const server = httpServer.createServer(app);
// const io = socketIO(server, {
//   path: "/socket.io",
//   serveClient: false,
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//   }
// });
// io.on("connection", (socket) => {
//   console.log(`User Connected: ${socket.id}`);

//   socket.on("join_room", (data) => {
//     socket.join(data);
//     console.log(`User with ID: ${socket.id} joined room: ${data}`);
//   });

//   socket.on("send_message", (data) => {
//     console.log("message?", data);
//     socket.to(data.room).emit("receive_message", data);
//   });

//   socket.on("disconnect", () => {
//     console.log("User Disconected:", socket.id);
//   });
// });

app.use(cors());

// const twilio = require('twilio');

// webpack/node-style require
//
// const DailyIframe = require('@daily-co/daily-js');
// let callFrame = DailyIframe.wrap(MY_IFRAME);

// callFrame = window.DailyIframe.createFrame({
//   showLeaveButton: true,
//   iframeStyle: {
//     position: 'fixed',
//     top: '0',
//     left: '0',
//     width: '100%',
//     height: '100%',
//   },
// });

// const accountSid = 'ACa1da19cc2a396d15f6c95f67a31b9b8e'; // Your Account SID from www.twilio.com/console
// const authToken = '4484649d1b0100761ae567a2c9db0e0b'; // Your Auth Token from www.twilio.com/console

// const twilio = require('twilio');
// const client = new twilio(accountSid, authToken);

// client.messages
//   .create({
//     body: 'Hello from Node',
//     to: '+7782374633', // Text this number
//     from: '++19704652089', // From a valid Twilio number
//   })
//   .then((message) => console.log(message.sid));

// app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
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
// app.use("/api/messages", messagesRoutes(db));

// app.get("/", (req, res) => {
//   req.session.isAuth = true;
//   console.log("req.session: ", req.session);

//   console.log("req.session.id: ", req.session.id);
//   res.json({ greetings: "hello world" });
// });

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
