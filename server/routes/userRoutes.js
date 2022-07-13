require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

// Get all users
module.exports = (db) => {
  router.get("/", (req, res) => {
    console.log("req session---", req.session);

    db.query(`SELECT * FROM users WHERE users.id = $1;`, [req.session.id])
      .then(({ rows: user }) => {
        res.json(user);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
