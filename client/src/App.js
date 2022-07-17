import React, {Component} from "react";
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
import { Button } from "@material-ui/core";
import VideoCall from "./components/Conference/VideoCall";
import { AgoraVideoPlayer, createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";
import Conference from "./components/Conference/Conference";

// const { connect } = require('twilio-video');
// import DailyIframe from '@daily-co/daily-js';
// let callFrame = DailyIframe.wrap(MY_IFRAME);

const config = {mode: "rtc", codec: "vp8"}

const useClient = createClient(config);
const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();



export default function App() {
  const client = useClient();
  const { ready, tracks } = useMicrophoneAndCameraTracks();

  const [inCall, setInCall] = useState(false);
  const { state, setState } = useApplicationData();
  console.log("////////\\\\\\\\", state);


  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    photo_url: "",
    role: "",
  });

  const userData = localStorage.getItem("user")
  console.log("+++++++++UserData++++++++++++", userData);


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
    });
  };

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
           <Route
            path="/conference"
            element={<Conference state={state} setState={setState} />}
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
