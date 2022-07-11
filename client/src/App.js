import { useState } from "react";
import "./App.css";
import Register from "./components/Auth/Register.js";
import SignIn from "./components/Auth/SignIn";
import Kanban from "./components//Kanban/Kanban";
import Form from "./components/Task/Form";
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
          <Route path="/task" element={<Form />} />
          {/* <Route path="/" element={<Homepage />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
