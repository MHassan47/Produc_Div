import React, { useState, useContext } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import useChatSocket from "../../hooks/useChatSocket";
import { AuthContext } from "../../context/AuthProvider";

export default function ChatRoom({ state }) {
  const [currentProject, setCurrentProject] = useState(1);
  const [currentMessage, setCurrentMessage] = useState("");
  const { user } = useContext(AuthContext);
  const { sendChatMessage, chatMessages } = useChatSocket(user.first_name);
  const sendMessage = () => {
    sendChatMessage(currentMessage);
    setCurrentMessage("");
  };

  console.log("Chat messages: ", chatMessages);
  return (
    <div className="chat_body">
      <div className="chat_container">
        <div className="chat_header">
          <Header
            state={state}
            currentProject={currentProject}
            setCurrentProject={setCurrentProject}
          />
        </div>
        <div className="chat_content">
          <div>
            <SideBar />
          </div>
          <div className="chat_call">
            <ScrollToBottom className="message-container">
              {chatMessages?.map(({ message, username, timestamp }) => (
                <div key={message + username} className="message-content">
                  <p>
                    <small className="time-stamp">{timestamp} </small>
                    <strong className="username"> {username}: </strong>
                    <normal className="message"> {message}</normal>
                  </p>
                </div>
              ))}
            </ScrollToBottom>

            <div className="footer-layout">
              <div className="chat_footer">
                <input
                  className="type-2"
                  type="text"
                  value={currentMessage}
                  placeholder="Whats new...?"
                  onChange={(event) => {
                    setCurrentMessage(event.target.value);
                  }}
                  onKeyPress={(event) => {
                    event.key === "Enter" && sendMessage();
                  }}
                />
                <button className="send-chat" onClick={sendMessage}>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
