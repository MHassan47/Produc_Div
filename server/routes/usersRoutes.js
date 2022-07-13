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
    const { users } = req.body;
    console.log("++++++++++++++++++++USers:  ", users);
    res.render("register");
  });

  router.post("/register", (req, res) => {
    const { first_name, last_name, email, password, photo_url, role } =
      req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    console.log("password----", hashedPassword);
    db.query(
      `INSERT INTO users (first_name, last_name, email, password, photo_url, role) 
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
      [first_name, last_name, email, hashedPassword, photo_url, role]
    )
      .then((result) => {
        const user = result.rows[0];
        // console.log("user.result: ", user);
        // res.status(200).send({ user });
        // res.redirect("/");

        res.json({ user });
      })
      .catch((err) => {
        res.status(401).send("Couldn't connect to the register page");
      });

    return router;
  });

  // router.get("/sign-in", (req, res) => {
  //   res.render("sign-in");
  //   res.status(200).send("sign-in path is working");
  // });

  router.post("/sign-in", (req, res) => {
    const { email, password } = req.body;
    db.query(`SELECT * FROM users WHERE email = $1;`, [email])
      .then((response) => {
        const user = response.rows[0];
        if (user) correctPassword = bcrypt.compareSync(password, user.password);
        if (correctPassword) {
          req.session.id = user.id;
          return res.json({ user });
        } else {
          return res.status(401).send({ error: "Incorrect email/password" });
        }
      })
      .catch((err) => console.log("+++++++++++++++++", err));
  });

  router.post("/logout", (req, res) => {
    req.session.id = null;
    return res.status(200).send();
  });
  return router;
};
