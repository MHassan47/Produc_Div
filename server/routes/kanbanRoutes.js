const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {


    db.query(
      
      `SELECT columns.title, columns.id, array_agg(tasks.id) as tasks, count(tasks.id)::int as total FROM columns JOIN tasks on column_id=columns.id GROUP BY columns.title, columns.id ORDER BY columns.id;`
    )
      .then((data) => {
       
        res.json(
          data.rows
         
        );
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
