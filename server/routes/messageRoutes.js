// const { db } = require("bcryptjs");
// const { response } = require("express");
// const express = require("express");
// const router = express.Router();

// module.exports = (db) => {
//   // gets all messsages
//   router.get("/", (req, res) => {
//     db.query(`SELECT * FROM messages;`)
//       .then((data) => {
//         res.json(data.rows);
//       })
//       .catch((err) => {
//         res.status(500).json({ error: err.message });
//       });
//   });

// // edit a message
// router.patch("/edit/:id", (req, res) => {
//   const { message_text } = req.body;
//   const message_id = req.params;
//   db.query(
//     `UPDATE messages SET tect = $1
//     WHERE message.id = $2`,
//     [message_text, message_id]
//   )
//     .then((data) => {
//       res.json(data.rows);
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err.message });
//     });
// });

// // deletes a message
// router.delete("/delete/:id", (req, res) => {
//   const message_id = req.params.id;

//   db.query(`DELETE FROM messages WHERE id =$1;`, [message_id])
//     .then((data) => {
//       res.json({ deleted: true });
//     })
//     .catch((err) => {
//       res.status(500).json({ delete: false, error: err.message });
//     });
// });

// // Send a new message
// router.post("/new/:projectID/:userID", (req, res) => {
//   const { message_text } = req.body;
//   const project_id = req.params.projectID;
//   const user_id = req.params.userID;
    

//   db.query(
//     `INSERT INTO messages(message_text, user_id, project_id, created_at) VALUES($1, $2, $3, $4, $5) RETURNING *;`,
//     [message_text, user_id, project_id, created_at]
//   )

//     .then((response) => {
//       res.json(response.rows[0]);
//     })

//     .catch((err) => {
//       res.status(500).json({ error: err.message });
//     });
// });
//   return router;
// };
