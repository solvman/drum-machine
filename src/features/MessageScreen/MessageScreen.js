import React from "react";
import { useSelector } from "react-redux";

function MessageScreen() {
  const message = useSelector((state) => state.message.message);

  return (
    <div className="message-screen">
      <p className="message">{message}</p>
    </div>
  );
}

export default MessageScreen;
