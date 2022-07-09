require("dotenv").config();
const { ENVIROMENT } = process.env;
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const PORT = 8080;

// db connection
const db = require("./configs/db.config");

// routes import
const usersRoutes = require("./routes/usersRoutes");
const tasksRoutes = require("./routes/tasksRoutes");

const app = express();

// middleware setup
app.use(morgan(ENVIROMENT));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieSession({ name: "session", keys: ["key1", "key2"] }));

// routes
app.use("/users", usersRoutes(db));
app.use("/api/tasks", tasksRoutes(db));


app.get("/", (req, res) => {
  res.json({ greetings: "hello world" });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
