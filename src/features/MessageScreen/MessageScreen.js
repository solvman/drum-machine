import React from "react";
import { useSelector } from "react-redux";

function MessageScreen() {
  const bank = useSelector((state) => state.bank.name);

  return (
    <div className="message-screen">
      <p className="message">{bank}</p>
    </div>
  );
}

export default MessageScreen;
