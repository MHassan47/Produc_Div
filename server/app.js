require("dotenv").config();
const { ENVIROMENT, PORT } = process.env;
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");

// db connection
const db = require("./configs/db.config");

// routes import
const usersRoutes = require("./routes/usersRoutes");

const app = express();

// middleware setup
app.use(morgan(ENVIROMENT));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieSession({ name: "session", keys: ["key1", "key2"] }));

// routes
app.use("api/users", usersRoutes(db));

app.get("/", (req, res) => {
  res.json({ greetings: "hello world" });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
