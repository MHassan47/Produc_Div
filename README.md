# Produc_Div

A collaborative project management application with a focus on team communication
!["Homepage"](https://github.com/MHassan47/Produc_Div/blob/feature/cleanup/client/src/Docs/homepage.PNG?raw=true)
!["SignIn"](https://github.com/MHassan47/Produc_Div/blob/feature/cleanup/client/src/Docs/signin.PNG?raw=true)
!["Dashboard"](https://github.com/MHassan47/Produc_Div/blob/feature/cleanup/client/src/Docs/dashboard.PNG?raw=true)
!["Chat"](https://github.com/MHassan47/Produc_Div/blob/feature/cleanup/client/src/Docs/Chat.PNG?raw=true)
!["Conference"](https://github.com/MHassan47/Produc_Div/blob/feature/cleanup/client/src/Docs/Conference.PNG?raw=true)

# Features

Users are able to:

- Sign up, login and logout
- Create new projects with team members
- Create/edit tasks
- Drag and drop tasks to indicate level of completeness
- Assign themselves to tasks
- Live chat with team members
- Video call other members

# Setup

1. Clone repo
2. Create database in psql

The project is made up of two running servers:

Client Server:

1. Cd into client directory
2. Install dependencies using `npm install` (some dependencies will require `--legacy-peer-deps` so include it in the command)
3. Setup `.env` file using `example.env` as a refence
4. Reset database by running `npm run db:reset`
5. Start the server with `npm start` command

Backend Server:

1. Cd into server directory
2. Install dependencies using `npm install`
3. Setup `.env` file using `example.env` as a refence
4. Start the server with `npm run start`

# Dependencies

- react: 18.2.0
- react-router-dom:6.3.0
- axios: ^0.27.2
- react-beautiful-dnd: 13.1.0
- express: 4.18.1
- cookie-session: 2.0.0
- bcryptjs: ^2.4.3
- nodemon: 2.0.19
- morgan: 1.10.0
- socket.io: 4.5.1
- agora-rtc-react: 1.1.3
- @material-ui/core: 4.12.4
- pg: 8.7.3
- ws: 7.5.8
