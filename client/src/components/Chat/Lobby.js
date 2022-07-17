import React, { useState } from "react";
import io from "socket.io-client";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import ChatRoom from "./ChatRoom";

const socket = io.connect("http://localhost:3000");

export default function Lobby({ state, setState }) {
  // for socket.io chat:
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="_container">
     
      <div className="lobby_content">
        
        <div className="lobby_call">
          <div className="Lobby">
            {!showChat ? (
              <div className="lobby_container">
                <h3>Join Chat</h3>
                <input
                  type="text"
                  placeholder="Team member..."
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Room ID..."
                  onChange={(event) => {
                    setRoom(event.target.value);
                  }}
                />
                <button onClick={joinRoom}>Join Room</button>
              </div>
            ) : (
              <ChatRoom
                socket={socket}
                username={username}
                room={room}
                joinRoom={joinRoom}
              />
            )}
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

// <div className="Chat">
//   {!showChat ? (
//     <div className="chat_container">
//       <h3>Join Chat</h3>
//       <input
//         type="text"
//         placeholder="Team member..."
//         onChange={(event) => {
//           setUsername(event.target.value);
//         }}
//       />
//       <input
//         type="text"
//         placeholder="Room ID..."
//         onChange={(event) => {
//           setRoom(event.target.value);
//         }}
//       />
//       <button onClick={joinRoom}>Join Room</button>
//     </div>
//   ) : (
//     <Chat socket={socket} username={username} room={room} />
//   )}
// </div>
