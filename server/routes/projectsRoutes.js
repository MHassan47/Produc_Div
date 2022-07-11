const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // Gets all projects
  router.get("/", (req, res) => {
    // const user_id = req.session.user_id;
    // if (!user_id) {
    //   alert("Please log in");
    //   return res.redirect("/");
    // }

    db.query(
      //   `SELECT categories.title, categories.id, json_agg(tasks.*) as tasks, count(tasks.*)::int as total FROM categories JOIN tasks ON category_id=categories.id GROUP BY categories.title, categories.id ORDER BY categories.id ;`
      //   `SELECT projects.*, json_agg(columns.title, columns.id, array_agg(tasks.id) as tasks, count(tasks.id)::int as total) as content FROM columns JOIN tasks on column_id=columns.id JOIN projects ON cproject_id = projects.id GROUP BY projects.id, columns.id ORDER BY columns.id;`
      //   `SELECT columns.title, columns.id, array_agg(tasks.id) as tasks, count(tasks.id)::int as total FROM columns JOIN tasks on column_id=columns.id GROUP BY columns.title, columns.id ORDER BY columns.id;`
      `SELECT projects.id, projects.name, json_agg(tasks.*) as tasks FROM projects JOIN tasks ON project_id=projects.id GROUP BY projects.id ORDER BY projects.id;`
    )
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

  // Gets all tasks for specific project
  router.get("/:projectID", (req, res) => {
    const project_id = req.params.projectID;
    db.query(`SELECT * FROM tasks WHERE tasks.project_id = $1;`, [project_id])
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

  router.post("new/:userID", (req, res) => {
    const { projectName } = req.body.name;
    const user_id = req.params.userID;
    const members = [
      req.body.memberOne,
      req.body.memberTwo,
      req.body.memberThree,
    ];

    db.query(`INSERT INTO projects(name, owner_id) VALUES($1, $2) ;`, [
      projectName,
      user_id,
    ])
      // .then(
      //   db.query(
      //     `INSERT INTO users_to_projects(user_id, project_id) VALUES ($1, $2), ($3, $2), ($4, $2);`,
      //     [members[0], members[1], members[2]]
      //   )
      // ) ---- adding multiple members to users_to_projects
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

  return router;
};
