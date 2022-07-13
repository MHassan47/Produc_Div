// import {React}from "react";
// import { useState } from "react";
// import "./App.css";
// import Homepage from "./components/HomePage/Homepage"
// import Kanban from "./components//Kanban/Kanban";
// import useApplicationData from "./hooks/useApplicationData";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { makeStyles } from '@material-ui/core/styles';
// import { CssBaseline } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     minHeight: '100vh',
//     backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/homepagebackground.jpg'})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//   }
// }));

// function App() { const classes = useStyles();

//   const { state, setState } = useApplicationData();
//   return (
/* <div className="App">
  <BrowserRouter>
    <Routes>
      <Route
        path="/dashboard"
        element={<Kanban state={state} setState={setState} />} />
      {<Route path="/" element={<Homepage />} />
    /* <Route path="/register" element={<Register />} />
    <Route path="/signin" element={<SignIn />} /> */
//     </Routes>
//   </BrowserRouter>
// </div>
//   ); */}

// }

// export default App;

import React, { useEffect } from "react";
// import { CssBaseline } from "@material-ui/core";
import HomePage from "./components/HomePage/Homepage";
import Register from "./components/Auth/Register";
import SignIn from "./components/Auth/SignIn";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Kanban from "./components//Kanban/Kanban";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Task/Form";
import useApplicationData from "./hooks/useApplicationData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
import { AuthContext } from "./context/AuthProvider";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     minHeight: "100vh",
//     // backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/homepagebackground.jpg'})`,
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//   },
// }));
export default function App() {
  const { state, setState } = useApplicationData();
  const [user, setUser] = useState(state.user[0]);

  useEffect(() => {
    setUser(state.user[0]);
  }, [state.user[0]]);
  const login = (data) => {
    setUser({
      id: data.id,
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
      photo_url: data.photo_url,
      role: data.role,
      auth: true,
    });
  };

  const logout = (data) => {
    setUser({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      photo_url: "",
      role: "",
      auth: false,
    });
  };

  console.log("+++++++++++++++++", user);
  // const classes = useStyles();
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <BrowserRouter>
        {/* <div className={classes.root}> */}
        {/* <Header />
        <SideBar /> */}

        {/* <CssBaseline /> */}
        <Routes>
          <Route
            path="/dashboard"
            element={<Dashboard state={state} setState={setState} />}
          />
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={<Register state={state} setState={setState} />}
          />
          <Route
            path="/sign-in"
            element={<SignIn state={state} setState={setState} />}
          />
        </Routes>
        {/* </div> */}
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
