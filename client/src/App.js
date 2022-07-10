import { useState } from "react";
import "./App.css";
import Kanban from "./components//Kanban/Kanban";
import useApplicationData from "./hooks/useApplicationData";

function App() {
  const { state, setState } = useApplicationData();
  return (
    <div className="App">
      <div>Hello World</div>
      <Kanban state={state} setState={setState} />
    </div>
  );
}

export default App;
