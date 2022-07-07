INSERT INTO categories (title) VALUES ('To Do');
INSERT INTO categories (title) VALUES ('In Progress');
INSERT INTO categories (title) VALUES ('Complete');

INSERT INTO tasks ( name, created_at, owner_id, category_id ) VALUES ('Layout Design', '2022-07-07', 1, 1);
INSERT INTO tasks ( name, created_at, owner_id, category_id ) VALUES ('Database Design', '2022-07-08', 1, 1);
INSERT INTO tasks ( name, created_at, owner_id, category_id ) VALUES ('Create Schedule', '2022-07-06', 2, 2);
INSERT INTO tasks ( name, created_at, owner_id, category_id ) VALUES ('Choose tech stack', '2022-07-06', 3, 2);
INSERT INTO tasks ( name, created_at, owner_id, category_id ) VALUES ('Create Schedule', '2022-07-06', 2, 3 );
INSERT INTO tasks ( name, created_at, owner_id, category_id ) VALUES ('Choose Idea', '2022-07-05', 3, 3);

INSERT INTO users_to_tasks (user_id, task_id) VALUES (1, 1);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (2, 1);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (3, 1);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (1, 2);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (3, 2);
INSERT INTO users_to_tasks (user_id, task_id) VALUES (2, 3);