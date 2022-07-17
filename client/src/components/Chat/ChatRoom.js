import React, { useState, useEffect } from "react";
import ScrollToBottom from 'react-scroll-to-bottom';



export default function ChatRoom({socket, username, room, joinRoom}) {

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
  useEffect((data) => {
    socket.on("receive_message", (messageData) => {
      setMessagelist((list) => [...list, messageData]);
    });
  }, [socket]);

return(
  <><div className="chat_body">
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
  </div><div className="chat_footer">
      <input
        type="text"
        value={currentMessage}
        placeholder="Whats new...?"
        onChange={(event) => {
          setCurrentMessage(event.target.value);
        } }
        onKeyPress={(event) => {
          event.key === "Enter" && sendMessage();
        } } />
      <button onClick={sendMessage}>&#9658;</button>
      <div>
        {/* {createdDate} at {createdTime} */}
      </div>
    </div></>



)

}