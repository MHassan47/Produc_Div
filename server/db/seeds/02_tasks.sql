
INSERT INTO tasks ( name, col, created_at, owner_id, project_id ) VALUES ('Layout Design', 'To Do', '2022-07-07', 1, 1);
INSERT INTO tasks ( name, col, created_at, owner_id, project_id ) VALUES ('Database Design', 'To Do', '2022-07-08', 1, 1);
INSERT INTO tasks ( name, col, created_at, owner_id, project_id ) VALUES ('Create Schedule', 'In Progress', '2022-07-06', 2, 1);
INSERT INTO tasks ( name, col, created_at, owner_id, project_id ) VALUES ('Choose tech stack', 'In Progress', '2022-07-06', 3, 1);
INSERT INTO tasks ( name, col, created_at, owner_id, project_id ) VALUES ('Create Schedule', 'Complete', '2022-07-06', 2, 1);
INSERT INTO tasks ( name, col, created_at, owner_id, project_id ) VALUES ('Choose Idea', 'Complete', '2022-07-05', 3, 1);

INSERT INTO tasks ( name, col, created_at, owner_id, project_id ) VALUES ('Layout Design', 'To Do', '2022-07-07', 1, 2);
INSERT INTO tasks ( name, col, created_at, owner_id, project_id ) VALUES ('Database Design', 'To Do', '2022-07-08', 1, 2);
INSERT INTO tasks ( name, col, created_at, owner_id, project_id ) VALUES ('Create Schedule', 'In Progress', '2022-07-06', 2, 2);
INSERT INTO tasks ( name, col, created_at, owner_id, project_id ) VALUES ('Choose tech stack', 'In Progress', '2022-07-06', 3, 2);
INSERT INTO tasks ( name, col, created_at, owner_id, project_id ) VALUES ('Create Schedule', 'Complete', '2022-07-06', 2, 2);
INSERT INTO tasks ( name, col, created_at, owner_id, project_id ) VALUES ('Choose Idea', 'Complete', '2022-07-05', 3, 2);

INSERT INTO users_to_tasks (user_id, task_id) VALUES (1, 1);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (2, 1);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (3, 1);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (1, 2);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (3, 2);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (2, 3);