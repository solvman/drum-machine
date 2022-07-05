import Controls from "./components/Controls";
import KeyPad from "./components/KeyPad";
import NoPad from "./components/NoPad";
import { useSelector } from "react-redux";

function App() {
  const power = useSelector((state) => state.powerswitch.power);

  return (
    <div id="drum-machine" className="App">
      {power ? <KeyPad /> : <NoPad />}
      <Controls />
    </div>
  );
}

export default App;
