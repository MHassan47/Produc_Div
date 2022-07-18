import { useState, useRef, useEffect } from "react";

export default function useChatSocket(username) {
  // for socket.io chat:
  const socket = useRef();
  const [chatMessages, setChatMessages] = useState([]);

  // Set up the socket connection and events
  useEffect(() => {
    const _socket = new WebSocket("ws://localhost:8080");
    socket.current = _socket;

    // Just FYI, you could delete "error" and "open" if you want
    _socket.addEventListener("error", (e) =>
      console.log("Websocket error:", e)
    );
    _socket.addEventListener("open", () => {
      console.log("Connected!");
    });

    // Every time we receive a message from the server, it will just be
    // *every* message sent to the room so far, as an array of objects.
    _socket.addEventListener("message", (message) => {
      setChatMessages(JSON.parse(message.data));
    });
  }, []);

  const formatTime = () => {
    const date = new Date(Date.now());
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? "pm" : "am";
    return `${hours > 12 ? hours - 12 : hours} : ${minutes} ${period}`;
  };

  // Tools we expose to the app
  const sendChatMessage = (message) => {
    // ref
    socket.current.send(
      JSON.stringify({
        message,
        username: username || "Anonymous",
        timestamp: formatTime(),
      })
    );
    // }
  };

  return {
    sendChatMessage,
    chatMessages,
  };
}
