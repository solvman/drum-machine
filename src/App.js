import { bankOne, bankTwo } from "./soundData";
import Controls from "./components/Controls";
import KeyPad from "./components/KeyPad";

function App() {
  return (
    <div id="drum-machine" className="App">
      <KeyPad bank={bankOne} />
      <Controls />
    </div>
  );
}

export default App;
