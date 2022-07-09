const express = require("express");
const router = express.Router();

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

  router.get("/register", (req, res) => {

    res.render("register");
    
  })
  router.post("/", (req, res) => {
    const { first_name, last_name, email, password, photo_url, role } = req.body;

    console.log("register body: " + req.body)

    db.query(`INSERT INTO users (first_name, last_name, email, password, photo_url, role) VALUES ('${first_name}', '${last_name}', '${email}', '${password}', '${photo_url}', '${role}') RETURNING *;`)
    .then(result => {
      const user = result.rows[0];
        console.log("user.result: " + user);

        res.redirect("/");
    })
    .catch(err => {
      res.status(401).send("Couldn't connect to the register page0")
    }) 

  return router;
  })

  router.get("/login", (req, res) => {

    res.render("login");
    res.status(200).send("login path is working");
  });

  router.post("/", (req, res) => {
    const { email, password } = req.body;
    db.query(`SELECT * FROM users WHERE email = $1 AND password = $2 LIMIT 1;`, [email, password])
    .then(users => {
        console.log(users.rows);
        const user = users.rows[0];
        
        if (user) {
          console.log(user);
         
          res.redirect("/");
        }
        if (!user) {
          res.send({ error: "error" })
        }
      })
      .catch(err => res.send(err));
  });

  return router;
};
