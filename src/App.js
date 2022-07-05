import soundData from "./soundData";
import Controls from "./components/Controls";
import KeyPad from "./components/KeyPad";

function App() {
  return (
    <div id="drum-machine" className="App">
      <KeyPad bank={soundData["Bank 1"]} />
      <Controls />
    </div>
  );
}

export default App;
