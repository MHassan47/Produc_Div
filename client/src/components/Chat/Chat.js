import React from "react";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import "./Chat.css";
import ChatRoom from "./ChatRoom";

const Chat = ({ state, setState, sendChatMessage, chatMessages }) => {


  return (
    <div className="chat-window">
      <div className="chat_container">
        <div className="chat_header"></div>
        <ChatRoom sendChatMessage={sendChatMessage} chatMessages={chatMessages} />
      </div>
    </div>
  );
};

export default Chat;
