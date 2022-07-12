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


import React from 'react';
import { CssBaseline } from '@material-ui/core';
import HomePage from './components/HomePage/Homepage';
import Register from './components/Auth/Register';
import SignIn from './components/Auth/SignIn';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Homepage from "./components/HomePage/Homepage"
import Kanban from "./components//Kanban/Kanban";
import useApplicationData from "./hooks/useApplicationData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/homepagebackground.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));
export default function App() {

  const { state, setState } = useApplicationData();
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <CssBaseline />
        <HomePage />
        <Routes>
          <Route
            path="/dashboard"
            element={<Kanban state={state} setState={setState} />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}