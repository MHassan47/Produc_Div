const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // Gets all projects
  router.get("/", (req, res) => {
    
    db.query(
      `SELECT projects.id, projects.name, json_agg(tasks.*) as tasks FROM projects JOIN tasks ON project_id=projects.id GROUP BY projects.id ORDER BY projects.id;`
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

  // Gets all tasks for specific project
  router.get("/:projectID", (req, res) => {
    const project_id = req.params.projectID;
    db.query(`SELECT * FROM tasks WHERE tasks.project_id = $1;`, [project_id])
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
