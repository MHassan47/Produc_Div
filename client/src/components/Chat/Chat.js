import React from "react";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import "./Chat.css";
import Lobby from "./Lobby";

const Chat = ({ state, setState }) => {
  ///submit function with axios call to link to routes add pro
  // const created_at = new Date(create_timestamp);
  // const createdDate = created_at.toLocaleDateString("en-US");
  // const createdTime = created_at.toLocaleTimeString("en-US");

  return (
    <div className="chat_sidebar">
      <SideBar state={state} />
     
      <div className="chat-window">
        <div className="chat_container">
          <div className="chat_header">
            <Header state={state} />
          </div>
           <Lobby />
        </div>
      </div>
    </div>
  );
};

export default Chat;
