// Message.js
import React from "react";
import "./Message.css";

const Message = ({ user, message, classnm, currentUser }) => {
  return (
    <div className={`chatbox ${classnm}`}>
      {user === currentUser ? `You: ${message}` : `${user}: ${message}`}
    </div>
  );
};

export default Message;
