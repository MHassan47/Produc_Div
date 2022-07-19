import React, { useState, useEffect, useContext } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import useChatSocket from "../../hooks/useChatSocket";
import { AuthContext } from "../../context/AuthProvider";

export default function ChatRoom({
  state,
  socket,
  username,
  room,
  joinRoom,
  // sendChatMessage,
  // chatMessages,
}) {
  const [currentMessage, setCurrentMessage] = useState("");
  const {user} = useContext(AuthContext)
  const { sendChatMessage, chatMessages } = useChatSocket(user.first_name);
  const sendMessage = () => {
    sendChatMessage(currentMessage);
    setCurrentMessage("");
  };

  console.log("Chat messages: ", chatMessages);
  return (
    <div className="chat_body">
      <div className="chat_container">
        {/* <Header state={state} /> */}

        <div className="chat_content">
          <div>
            <SideBar />
          </div>
          <div className="chat_call">
            <ScrollToBottom className="message-container">
              {chatMessages?.map(({ message, username, timestamp }) => (
                <div key={message + username} className="message-content">
                  <p>
                    <small class="time-stamp">[{timestamp}] </small>
                    <strong>{username}:</strong>
                    {message}{" "}
                  </p>
                </div>
              ))}
              {/*chatMessages.map((messageContent) => {
            return (
              <div
                className="message"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })*/}
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
                  &#9658;
                </button>
                <div>{/* {createdDate} at {createdTime} */}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
