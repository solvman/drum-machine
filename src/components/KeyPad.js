import soundData from "../soundData";
import { useSelector } from "react-redux";

const KeyPad = () => {
  const currentBank = useSelector((state) => state.bank.name);
  const bank = soundData[currentBank].data;

  const playSound = (key) => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <section id="drum-pad-container">
      {bank.map((element) => {
        return (
          <button
            className="drum-pad"
            key={element.keyCode}
            onClick={() => playSound(element.keyTrigger, element.id)}
          >
            <audio id={element.keyTrigger} src={element.url} />
            {element.keyTrigger}
          </button>
        );
      })}
    </section>
  );
};

export default KeyPad;
