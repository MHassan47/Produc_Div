import React, { useEffect, useState} from "react";
import "./App.css";
import HomePage from "./components/HomePage/Homepage";
import Register from "./components/Auth/Register";
import SignIn from "./components/Auth/SignIn";
import Dashboard from "./components/Dashboard/Dashboard";
import Chat from "./components/Chat/Chat";
import Conference from "./components/Conference/Conference";
import useApplicationData from "./hooks/useApplicationData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthProvider";
// import {
//   createClient,
//   createMicrophoneAndCameraTracks,
// } from "agora-rtc-react";
// import io from "socket.io-client";

// const config = { mode: "rtc", codec: "vp8" };

// const useClient = createClient(config);
// const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();

export default function App() {

  const { isFetching, state, setState, updateCard, addUserToCard } =
    useApplicationData();
  const [user, setUser] = useState(state.user[0]);
  const [loading, setLoading] = useState(true);
  console.log("state:", state);
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
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <BrowserRouter>
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
            element={
              <Chat
                state={state}
                setState={setState}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
