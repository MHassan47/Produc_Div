require("dotenv").config();
const { ENVIROMENT } = process.env;
const express = require("express");
const morgan = require("morgan");
// import session = require('express-session');
const cookieSession = require("cookie-session");
const PORT = 8080;
const cors = require("cors");

// access token
// const jwt = require('jsonwebtoken');
// Register the route to get a new token
// In a real world scenario we would authenticate user credentials
// before creating a token, but for simplicity accessing this route
// will generate a new token that is valid for 2 minutes
// app.get('/token', function(req, res){
//   var token = jwt.sign({username:"ado"}, 'supersecret',{expiresIn: 120});
//   res.send(token)
// }) 

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

app.use(cookieSession({ 
  name: "session", 
  keys: ["key1", "key2"],
  // 24 hours
  cookie: { maxAge: 30000 },
  saveUninitialized: false
  // expires: 
// 24 hours 
}));

// routes
app.use("/users", usersRoutes(db));
app.use("/api/tasks", tasksRoutes(db));
app.use("/api/projects", projectsRoutes(db));


app.get("/", (req, res) => {
  req.session.isAuth = true;
  console.log("req.session: ", req.session);

  console.log("req.session.id: ", req.session.id);
  res.json({ greetings: "hello world" });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
