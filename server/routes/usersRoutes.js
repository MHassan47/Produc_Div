require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

// Get all users
module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(({ rows: users }) => {
        res.json(
          users.reduce(
            (previous, current) => ({ ...previous, [current.id]: current }),
            {}
          )
        );
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });

    return router;
  });

  router.get("/:id", (req, res) => {
    const user_email = req.params.id;
    db.query(`SELECT * FROM users WHERE users.email = $1;`, [user_email])
      .then(({ rows: users }) => {
        res.json(
          users.reduce(
            (previous, current) => ({ ...previous, [current.id]: current }),
            {}
          )
        );
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });

    return router;
  });

  router.get("/register", (req, res) => {
    res.render("register");
  });

  router.post("/register", (req, res) => {
    const { first_name, last_name, email, password, photo_url, role } =
      req.body;

    console.log("register body: " + req.body);

    db.query(
      `INSERT INTO users (first_name, last_name, email, password, photo_url, role) VALUES ('${first_name}', '${last_name}', '${email}', '${password}', '${photo_url}', '${role}') RETURNING *;`
    )
      .then((result) => {
        const user = result.rows[0];
        console.log("user.result: " + user);

        res.redirect("/");
      })
      .catch((err) => {
        res.status(401).send("Couldn't connect to the register page0");
      });

    return router;
  });

  router.get("/sign-in", (req, res) => {
    res.render("sign-in");
    res.status(200).send("sign-in path is working");
  });

  router.post("/sign-in", (req, res) => {
    const { email, password } = req.body;

    // const user = { email, password }
    //  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    //  res.json({ accessToken: accessToken })
    db.query(
      `SELECT * FROM users WHERE email = $1 AND password = $2 LIMIT 1;`,
      [email, password]
    )
      .then((users) => {
        console.log(users.rows);
        const user = users.rows[0];

        if (user) {
          console.log(user);

          res.redirect("/");
        }
        if (!user) {
          res.status(401).send({ error: "error" });
        }
      })

      .catch((err) => res.send(err));
  });

  return router;
};
