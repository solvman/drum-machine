import { bankOne, bankTwo } from "./soundData";
import { useState } from "react";
import Controls from "./components/Controls";
import KeyPad from "./components/KeyPad";

function App() {
  const [message, setMessage] = useState("");
  const [isBankTwo, setBankTwo] = useState(false);

  console.log(isBankTwo);

  return (
    <div id="drum-machine" className="App">
      <KeyPad bank={isBankTwo ? bankTwo : bankOne} setMessage={setMessage} />
      <Controls
        message={message}
        setBank={setBankTwo}
        setMessage={setMessage}
      />
    </div>
  );
}

export default App;
