const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // Getting all tasks
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM tasks;`)
      .then((data) => {
        res.json(data.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //   Edits a task card
  router.post("/edit/:id", (req, res) => {
    const value = req.body.value;
    const task_id = req.params.id;
    db.query(
      `UPDATE tasks SET name = $1
      WHERE tasks.id = $2;`,
      [value, task_id]
    )
      .then((data) => {
        res.json(data.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  //   Deletes a task card
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

  //   Creates a task card
  router.post("/new/:projectID", (req, res) => {
    const { name, created_at, owner_id, col } = req.body;
    const project_id = req.params.projectID;

    db.query(
      `INSERT INTO tasks(name, created_at, owner_id, col, project_id) VALUES($1, $2, $3, $4, $5)
        RETURNING *;`,
      [name, created_at, owner_id, col, project_id]
    )

      .then((response) => {
        res.json(response.rows[0]);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //   Moves tasks
  router.put("/move/:id", (req, res) => {
    const task_id = req.params.id;
    const column = req.body.col;
    db.query(
      `UPDATE tasks SET col = $1  
      WHERE tasks.id = $2`,
      [column, task_id]
    )
      .then((data) => {
        res.json(data.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/users_to_tasks", (req, res) => {
    db.query(
      `SELECT task_id, array_agg(user_id) as assigned_users FROM users_to_tasks GROUP BY task_id ORDER BY task_id;`
    )
      .then((data) => {
        res.json(data.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/users_to_tasks/:id/:taskID", (req, res) => {
    const user_id = req.params.id;
    const task_id = req.params.taskID;

    db.query(
      `INSERT INTO users_to_tasks (user_id, task_id) 
      VALUES ($1, $2) RETURNING *;`,
      [user_id, task_id]
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
