import { useState } from "react";
import "./App.css";
import Homepage from "./components/HomePage/Homepage"
import Kanban from "./components//Kanban/Kanban";
import useApplicationData from "./hooks/useApplicationData";

function App() {
  const { state, setState } = useApplicationData();
  return (
    <div className="App">
      <Homepage state={state} setState={setState}/>
      <div>Hello World</div>
      <Kanban state={state} setState={setState} />
    </div>
  );
}

export default App;
