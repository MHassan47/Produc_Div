require("dotenv").config();
const { ENVIROMENT } = process.env;
const express = require("express");
const morgan = require("morgan");
// import session = require('express-session');
const cookieSession = require("cookie-session");
const PORT = 8080;
const cors = require("cors");
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




// db connection
const db = require("./configs/db.config");

// routes import
const usersRoutes = require("./routes/usersRoutes");
const tasksRoutes = require("./routes/tasksRoutes");
const projectsRoutes = require("./routes/projectsRoutes");

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
    maxAge: 300000
  })
);

// routes
app.use("/users", usersRoutes(db));
app.use("/api/tasks", tasksRoutes(db));
app.use("/api/projects", projectsRoutes(db));

// app.get("/", (req, res) => {
//   req.session.isAuth = true;
//   console.log("req.session: ", req.session);

//   console.log("req.session.id: ", req.session.id);
//   res.json({ greetings: "hello world" });
// });

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
