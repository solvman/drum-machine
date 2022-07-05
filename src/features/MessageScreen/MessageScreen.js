import React from "react";
import { useSelector } from "react-redux";

function MessageScreen() {
  const currentBank = useSelector((state) => state.bank.name);

  return (
    <div className="message-screen">
      <p className="message">{currentBank}</p>
    </div>
  );
}

export default MessageScreen;
