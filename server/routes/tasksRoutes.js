const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // Getting all tasks
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM tasks;`)
      .then((data) => {
        // const users = data.rows;

        res.json(
          data.rows
          //   tasks.reduce(
          //     (previous, current) => ({ ...previous, [current.id]: current }),
          //     {}
          //   )
        );
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //   Edits a task card
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
  //   Delets a task card
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

  //   Creats a task card
  router.post("/new/:projectID", (req, res) => {
    console.log("reached");
    const { name, created_at, owner_id, col } = req.body;
    const project_id = req.params.projectID;
    // const column_name = req.params.col;
    // const owner_id = req.session.user_id;

    db.query(
      `INSERT INTO tasks(name, created_at, owner_id, col, project_id) VALUES($1, $2, $3, $4, $5)
        RETURNING *;`,
      [name, created_at, owner_id, col, project_id]
    )
      // .then(db.query(`INSERT INTO`)) --- inserting multiple users to users_to_tasks
      .then((response) => {
        console.log("done");
        res.json(
          response.rows[0]
          // tasks.reduce(
          //   (previous, current) => ({ ...previous, [current.id]: current }),
          //   {}
          // )
        );
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //   Moves tasks
  router.put("/move/:id", (req, res) => {
    console.log("testtt");
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
      `SELECT task_id, array_agg(user_id) as assigned_users FROM users_to_tasks GROUP BY task_id;`
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
