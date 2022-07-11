import { useState } from "react";
import "./App.css";
import Register from './components/Auth/Register.js';
import SignIn from "./components/Auth/SignIn";
// import Kanban from "./components//Kanban/Kanban";
import useApplicationData from "./hooks/useApplicationData";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {

  const { state, setState } = useApplicationData();
  return (
    <div className="App">
<<<<<<< HEAD
    <Register />
      {/* <SignIn /> */}
      {/* <Kanban state={state} setState={setState} /> */}
=======
      <BrowserRouter>
        <Routes>
          <Route
            path="/dashboard"
            element={<Kanban state={state} setState={setState} />}
          />
          {/* <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} /> */}
        </Routes>
      </BrowserRouter>
>>>>>>> 79a3e90e83fefc9fb33b54e1e74bc9148cbbaabc
    </div>
  );
}

export default App;
