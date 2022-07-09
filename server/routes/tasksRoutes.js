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

  //   Editing a task card
  router.patch("/edit/:id", (req, res) => {
    const { name } = req.body;
    const task_id = req.params;
    db.query(
      `UPDATE tasks SET name = $1
      WHERE tasks.id = $2`,
      [name, task_id]
    )
      .then((data) => {
        res.json(data.rows);
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

  //   Creating a task card
  router.post("new/:projectID/:columnID", (req, res) => {
    const { name, created_at } = req.body;
    const project_id = req.params.projectID;
    const column_id = req.params.columnID;
    const owner_id = req.session.user_id;

    db.query(
      `INSERT INTO tasks(name, created_at, owner_id,roject_ column_id, project_id) VALUES($1, $2, $3, $4, $5)
        RETURNING tasks;`,
      [name, created_at, owner_id, column_id, project_id]
    )
      // .then(db.query(`INSERT INTO`)) --- inserting multiple users to users_to_tasks
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

  //   Moving tasks
  router.patch("/:id/:columnID", (req, res) => {
    const task_id = req.params.id;
    const column_id = req.params.columnID;
    db.query(
      `UPDATE tasks SET column_id = $1  
      WHERE tasks.id = $2`,
      [column_id, task_id]
    )
      .then((data) => {
        res.json(data.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
