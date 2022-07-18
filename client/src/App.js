import React, { Component } from "react";
import "./App.css";
// import { CssBaseline } from "@material-ui/core";
import HomePage from "./components/HomePage/Homepage";
import Register from "./components/Auth/Register";
import SignIn from "./components/Auth/SignIn";
import Dashboard from "./components/Dashboard/Dashboard";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import Chat from "./components/Chat/Chat";
import Conference from "./components/Conference/Conference";
// import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
// import Kanban from "./components//Kanban/Kanban";
// import Form from "./components/Task/Form";
import useApplicationData from "./hooks/useApplicationData";
import useChatSocket from "./hooks/useChatSocket";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
import { AuthContext } from "./context/AuthProvider";
// import { Button } from "@material-ui/core";
// import VideoCall from "./components/Conference/VideoCall";
import {
  AgoraVideoPlayer,
  createClient,
  createMicrophoneAndCameraTracks,
} from "agora-rtc-react";
// const { connect } = require('twilio-video');
// import DailyIframe from '@daily-co/daily-js';
// let callFrame = DailyIframe.wrap(MY_IFRAME);

// const socket = io("http://localhost:8080");
// socket.on("connection", function () {
//   console.log("connected:", socket.connected);
// });
// setTimeout(() => console.log("socket:", socket), 2000);

const config = { mode: "rtc", codec: "vp8" };

const useClient = createClient(config);
const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();

export default function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  // const joinRoom = () => {
  //   if (username !== "" && room !== "") {
  //     socket.emit("join_room", room);
  //     setShowChat(true);
  //   }
  // };

  // const client = useClient();
  // const { ready, tracks } = useMicrophoneAndCameraTracks();

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

  // 
  const { sendChatMessage, chatMessages } = useChatSocket(user.first_name);
  // const classes = useStyles();
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <BrowserRouter>
        {/* <div className={classes.root}> */}
        {/* <Header state={state} />
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
          <Route
            path="/chat"
            element={
              <Chat
                state={state}
                setState={setState}
                sendChatMessage={sendChatMessage}
                chatMessages={chatMessages}
              />
            }
          />
          {/* <Route
            path="/chat"
          />
          */}
        </Routes>
        {/* </div> */}
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
