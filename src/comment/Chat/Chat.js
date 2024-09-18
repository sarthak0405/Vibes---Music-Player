// Chat.js
import React, { useEffect, useState } from "react";
import socketIo from "socket.io-client";
import "./Chat.css";
import Message from "../Message/Message";
import ScrollToBottom from "react-scroll-to-bottom";

const ENDPOINT = "http://localhost:4500";

const Chat = ({ username }) => {
  const [id, setId] = useState("");
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const send = () => {
    const message = inputMessage;
    socket.emit("message", { user: username, message, id });
    setInputMessage("");
  };

  useEffect(() => {
    const newSocket = socketIo(ENDPOINT, {
      transports: ["websocket"],
    });

    newSocket.on("connect", () => {
      newSocket.emit("joined", { user: username });
      setId(newSocket.id);
    });

    newSocket.on("welcome", (data) => {
      setMessages([...messages, data]);
    });

    newSocket.on("userJoined", (data) => {
      setMessages([...messages, data]);
    });

    newSocket.on("leave", (data) => {
      setMessages([...messages, data]);
    });

    setSocket(newSocket);

    return () => {
      if (newSocket) {
        newSocket.emit("disconnectEvent");
        newSocket.off();
      }
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("sendMessage", (data) => {
        setMessages([...messages, data]);
      });
    }
    return () => {
      if (socket) {
        socket.off();
      }
    };
  }, [messages, socket]);

  return (
    <>
      <h4>User: {username}</h4>

      <ScrollToBottom className="message-container">
        {messages.map((msg, index) => (
          <Message
            key={index}
            user={msg.user}
            message={msg.message}
            currentUser={username}
          />
        ))}
      </ScrollToBottom>
      <div style={{ display: "flex" }}>
        <input
          style={{ width: "380px", color: "black", height: "30px" }}
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          id="messageinput"
          placeholder="Type your message..."
        />

        <i
          class="fa-solid fa-paper-plane"
          onClick={send}
          style={{ fontSize: "24px" }}
        ></i>
      </div>
    </>
  );
};

export default Chat;
