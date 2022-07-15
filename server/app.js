require("dotenv").config();
const { ENVIROMENT } = process.env;
const express = require("express");
const morgan = require("morgan");
// import session = require('express-session');
const cookieSession = require("cookie-session");
const PORT = 8080;
const cors = require("cors");


// db connection
const db = require("./configs/db.config");

// routes import
const usersRoutes = require("./routes/usersRoutes");
const tasksRoutes = require("./routes/tasksRoutes");
const projectsRoutes = require("./routes/projectsRoutes");
const messagesRoutes = require("./routes/messageRoutes");

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
app.use("/api/messages", messagesRoutes(db));

// app.get("/", (req, res) => {
//   req.session.isAuth = true;
//   console.log("req.session: ", req.session);

//   console.log("req.session.id: ", req.session.id);
//   res.json({ greetings: "hello world" });
// });

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
