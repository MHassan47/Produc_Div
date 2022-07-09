const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // Getting all tasks
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM tasks;`)
      .then(({ rows: tasks }) => {
        // const users = data.rows;
        res.json(
          tasks.reduce(
            (previous, current) => ({ ...previous, [current.id]: current }),
            {}
          )
        );
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  //   Creating a task card
  router.post("/:id", (req, res) => {
    const { name, created_at } = req.body;
    const column_id = req.params;
    const owner_id = req.session.user_id;

    db.query(
      `INSERT INTO tasks(name, created_at, owner_id, column_id) VALUES($1, $2, $3, $4)
        RETURNING tasks;`,
      [name, created_at, owner_id, column_id]
    )
      .then(({ rows: tasks }) => {
        res.json(
          tasks.reduce(
            (previous, current) => ({ ...previous, [current.id]: current }),
            {}
          )
        );
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //   Editing a task card
  router.patch("/:id", (req, res) => {
    const { name, created_at, column_id } = req.body;
    const owner_id = req.session.user_id;

    db.query(
      `INSERT INTO tasks(name, created_at, owner_id, column_id) VALUES($1, $2, $3, $4)
        RETURNING tasks;`,
      [name, created_at, owner_id, column_id]
    )
      .then(({ rows: tasks }) => {
        res.json(
          tasks.reduce(
            (previous, current) => ({ ...previous, [current.id]: current }),
            {}
          )
        );
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //   Deleting a task card
  router.delete("/delete/:id", (req, res) => {
    const task_id = req.params.id;

    db.query(`DELETE FROM tasks WHERE  id = $1;`, [task_id])
      .then((data) => {
        res.json({ deleted: true });
      })
      .catch((err) => {
        res.status(500).json({ deleted: false, error: err.message });
      });
  });
  return router;
};
