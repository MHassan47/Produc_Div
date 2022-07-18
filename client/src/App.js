
import React, { useEffect } from "react";
import HomePage from "./components/HomePage/Homepage";
import Register from "./components/Auth/Register";
import SignIn from "./components/Auth/SignIn";
import Chat from "./components/Chat/Chat";
// import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Kanban from "./components//Kanban/Kanban";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Task/Form";
import useApplicationData from "./hooks/useApplicationData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthProvider";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import { Button } from "@material-ui/core";
import VideoCall from "./components/Conference/VideoCall";
import { AgoraVideoPlayer, createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";
import Conference from "./components/Conference/Conference";
import io from 'socket.io-client';


const socket = io.connect("http://localhost:3000/chat");

const config = {mode: "rtc", codec: "vp8"}

const useClient = createClient(config);
const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();



export default function App() {

  // for socket.io chat:
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  const client = useClient();
  const { ready, tracks } = useMicrophoneAndCameraTracks();
  const [inCall, setInCall] = useState(false);



  const { isFetching, state, setState, updateCard, addUserToCard } = useApplicationData();
  const [user, setUser] = useState(state.user[0]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isFetching) {
      setLoading(false);
      setUser(state.user[0]);
    }
  }, [state.user, isFetching]);


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

  const logout = () => {
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

  if (loading) {
    return <p>Loading</p>;
  }
  console.log({ user });
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
            element={
              <Dashboard
                user={user}
                state={state}
                setState={setState}
                updateCard={updateCard}
                addUserToCard={addUserToCard}
              />
            }
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
            element={<Chat state={state} setState={setState} />}
          />
         
        </Routes>
        {/* </div> */}
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
