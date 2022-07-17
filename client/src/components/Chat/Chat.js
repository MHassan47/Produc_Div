import React, { useState, useEffect } from "react";
import ScrollToBottom from 'react-scroll-to-bottom';
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import "./Chat.css";

const Chat = ({ socket, username, room, state, setState }) => {
  ///submit function with axios call to link to routes add pro
  // const created_at = new Date(create_timestamp);
  // const createdDate = created_at.toLocaleDateString("en-US");
  // const createdTime = created_at.toLocaleTimeString("en-US");
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessagelist] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
      setMessagelist((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessagelist((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className="chat_sidebar">
      <SideBar state={state} />
      <div className="chat-window">
        <div className="chat_container">
          <div className="chat_header">
            <Header state={state} />
          </div>
          <div className="chat_body">
            <ScrollToBottom className="message-container">
            {messageList.map((messageContent) => {
              return (
                <div className="message" id={username === messageContent.author ? "you" : "other"}>
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
            })};
            </ScrollToBottom>
          </div>
          <div className="chat_footer">
            <input
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
            <button onClick={sendMessage}>&#9658;</button>
            <div>
              {/* {createdDate} at {createdTime} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
