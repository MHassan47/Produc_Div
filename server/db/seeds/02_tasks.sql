INSERT INTO columns (title, cproject_id) VALUES ('To Do', 1);
INSERT INTO columns (title, cproject_id) VALUES ('In Progress', 1);
INSERT INTO columns (title, cproject_id) VALUES ('Complete', 1);

INSERT INTO columns (title, cproject_id) VALUES ('To Do', 2);
INSERT INTO columns (title, cproject_id) VALUES ('In Progress', 2);
INSERT INTO columns (title, cproject_id) VALUES ('Complete', 2);



INSERT INTO tasks ( name, created_at, owner_id, column_id ) VALUES ('Layout Design', '2022-07-07', 1, 1);
INSERT INTO tasks ( name, created_at, owner_id, column_id ) VALUES ('Database Design', '2022-07-08', 1, 1);
INSERT INTO tasks ( name, created_at, owner_id, column_id ) VALUES ('Create Schedule', '2022-07-06', 2, 2);
INSERT INTO tasks ( name, created_at, owner_id, column_id ) VALUES ('Choose tech stack', '2022-07-06', 3, 2);
INSERT INTO tasks ( name, created_at, owner_id, column_id ) VALUES ('Create Schedule', '2022-07-06', 2, 3 );
INSERT INTO tasks ( name, created_at, owner_id, column_id ) VALUES ('Choose Idea', '2022-07-05', 3, 3);

INSERT INTO tasks ( name, created_at, owner_id, column_id ) VALUES ('Layout Design', '2022-07-07', 1, 4);
INSERT INTO tasks ( name, created_at, owner_id, column_id ) VALUES ('Database Design', '2022-07-08', 1, 4);
INSERT INTO tasks ( name, created_at, owner_id, column_id ) VALUES ('Create Schedule', '2022-07-06', 2, 5);
INSERT INTO tasks ( name, created_at, owner_id, column_id ) VALUES ('Choose tech stack', '2022-07-06', 3, 5);
INSERT INTO tasks ( name, created_at, owner_id, column_id ) VALUES ('Create Schedule', '2022-07-06', 2, 6 );
INSERT INTO tasks ( name, created_at, owner_id, column_id ) VALUES ('Choose Idea', '2022-07-05', 3, 6);

INSERT INTO users_to_tasks (user_id, task_id) VALUES (1, 1);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (2, 1);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (3, 1);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (1, 2);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (3, 2);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (2, 3);