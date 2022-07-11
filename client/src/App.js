import { useState } from "react";
import "./App.css";
import Register from './components/Auth/Register.js';
import SignIn from "./components/Auth/SignIn";
import Kanban from "./components//Kanban/Kanban";
import useApplicationData from "./hooks/useApplicationData";
import { BrowserRouter, Route, Routes } from "react-router-dom";




function App() {

  const { state, setState } = useApplicationData();
  return (
    <div className="App">
    {/* <Register /> */}
      {/* <SignIn /> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/dashboard"
            element={<Kanban state={state} setState={setState} />}
          />
          {/* <Route path="/" element={<Homepage />} /> */}
          <Route path="/register" element={<Register state={state} setState={setState} />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
