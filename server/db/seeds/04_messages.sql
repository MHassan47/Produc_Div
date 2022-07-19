
INSERT INTO messages ( message_text, sender_id, project_id, created_at) VALUES ('Lets create the ERDs then the wireframes', 1, 1, '2022-07-14');
INSERT INTO messages ( message_text, sender_id, project_id, created_at) VALUES ('Okay, that sounds good to me', 2, 1, '2022-07-14');
INSERT INTO messages ( message_text, sender_id, project_id, created_at) VALUES ('Can one of you review my changes?', 3, 1, '2022-07-14');
INSERT INTO messages ( message_text, sender_id, project_id, created_at) VALUES ('What seems to be the cause of the bug?', 1, 1, '2022-07-14');
INSERT INTO messages ( message_text, sender_id, project_id, created_at) VALUES ('I think its something with the DB', 3, 1, '2022-07-14');
INSERT INTO messages ( message_text, sender_id, project_id, created_at) VALUES ('Alright, lets have a look', 1, 1, '2022-07-14');
INSERT INTO messages ( message_text, sender_id, project_id, created_at) VALUES ('I think we just need to run (npm db:reset)', 3, 1, '2022-07-14');


INSERT INTO users_to_messages (user_id, message_id) VALUES (1, 1);
INSERT INTO users_to_messages (user_id, message_id) VALUES (2, 2);
INSERT INTO users_to_messages (user_id, message_id) VALUES (3, 3);
INSERT INTO users_to_messages (user_id, message_id) VALUES (1, 4);
INSERT INTO users_to_messages (user_id, message_id) VALUES (3, 5);
INSERT INTO users_to_messages (user_id, message_id) VALUES (1, 6);
INSERT INTO users_to_messages (user_id, message_id) VALUES (3, 7);

-- projects to messages (project_)