import { useState } from "react";
import "./App.css";
import Register from './components/Auth/Register.js';
import SignIn from "./components/Auth/SignIn";
// import Kanban from "./components//Kanban/Kanban";
import useApplicationData from "./hooks/useApplicationData";



function App() {

  const { state, setState } = useApplicationData();
  return (
    <div className="App">
    <Register />
      {/* <SignIn /> */}
      {/* <Kanban state={state} setState={setState} /> */}
    </div>
  );
}

export default App;
