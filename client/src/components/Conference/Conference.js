import { useState } from "react";
import { Button } from "@material-ui/core";
import VideoCall from "./VideoCall";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import "./Conference.css";

export default function Conference({ state, setState }) {
const [inCall, setInCall] = useState(false);



return (
  <div className="conference_container">
    <div className="conference_header">
      <Header state={state} />
    </div>
    <div className="conference_content">
      <div>
        <SideBar />
      </div>
      <div className="conference_call">

      {inCall ? <VideoCall setInCall={ setInCall } /> 
      :  
      
      <Button id="join_button" style={{ justifyContent: 'centre', marginTop: '100px', width: '100%'}} variant="contained" color="primary" onClick={() => setInCall(true)}>
        Join Call
      </Button>}
      </div>
    </div>
  </div>
);

  // return (
  //   <div style={{ height: "100vh" }}>
  

      
  //   </div>
  // );
}