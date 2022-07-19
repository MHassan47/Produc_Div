
INSERT INTO tasks ( name, col, created_at, owner_id, project_id ) VALUES ('Layout Design', 'To Do', '2022-07-07', 1, 1);
INSERT INTO tasks ( name, col, created_at, owner_id, project_id ) VALUES ('Database Design', 'To Do', '2022-07-08', 1, 1);
INSERT INTO tasks ( name, col, created_at, owner_id, project_id ) VALUES ('Create kanban', 'In Progress', '2022-07-06', 2, 1);
INSERT INTO tasks ( name, col, created_at, owner_id, project_id ) VALUES ('Choose tech stack', 'In Progress', '2022-07-06', 3, 1);
INSERT INTO tasks ( name, col, created_at, owner_id, project_id ) VALUES ('Create Schedule', 'Complete', '2022-07-06', 2, 1);
INSERT INTO tasks ( name, col, created_at, owner_id, project_id ) VALUES ('Choose Idea', 'Complete', '2022-07-05', 3, 1);

INSERT INTO tasks ( name, col, created_at, owner_id, project_id ) VALUES ('Layout Design', 'To Do', '2022-07-07', 1, 2);
INSERT INTO tasks ( name, col, created_at, owner_id, project_id ) VALUES ('Database Design', 'To Do', '2022-07-08', 1, 2);
INSERT INTO tasks ( name, col, created_at, owner_id, project_id ) VALUES ('Create Kanban', 'In Progress', '2022-07-06', 2, 2);
INSERT INTO tasks ( name, col, created_at, owner_id, project_id ) VALUES ('Choose tech stack', 'In Progress', '2022-07-06', 3, 2);
INSERT INTO tasks ( name, col, created_at, owner_id, project_id ) VALUES ('Create Schedule', 'Complete', '2022-07-06', 2, 2);
INSERT INTO tasks ( name, col, created_at, owner_id, project_id ) VALUES ('Choose Idea', 'In Progress', '2022-07-05', 3, 2);


INSERT INTO users_to_tasks (user_id, task_id) VALUES (1, 1);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (2, 1);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (3, 1);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (1, 2);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (3, 2);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (1, 3);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (2, 3);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (1, 4);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (2, 4);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (3, 5);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (1, 5);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (3, 6);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (2, 6);

INSERT INTO users_to_tasks (user_id, task_id) VALUES (1, 7);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (2, 7);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (3, 8);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (1, 8);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (3, 9);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (1, 9);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (2, 9);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (1, 10);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (2, 11);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (3, 12);
