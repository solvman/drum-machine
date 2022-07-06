import soundData from "../soundData";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMessage } from "../features/MessageScreen/MessageScreenSlice";

const KeyPad = () => {
  useEffect(() => {
    window.addEventListener("keypress", handleClick);

    return () => {
      window.removeEventListener("keypress", handleClick);
    };
  }, []);

  const dispatch = useDispatch();
  const currentBank = useSelector((state) => state.bank.name);
  const volume = useSelector((state) => state.volume.value);
  const bank = soundData[currentBank].data;

  const handleClick = (event) => {
    const element = document.getElementById(
      `button-${event.key.toUpperCase()}`
    );
    if (element !== null) {
      element.click();
      element.classList.add("active");
      setTimeout(() => element.classList.remove("active"), 100);
    }
  };

  const playSound = (key, soundName) => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.volume = volume / 100;
    dispatch(setMessage(soundName));
    audio.play();
  };

  return (
    <section id="drum-pad-container">
      {bank.map((element) => {
        return (
          <button
            className="drum-pad"
            id={`button-${element.keyTrigger}`}
            key={element.keyCode}
            onClick={() => playSound(element.keyTrigger, element.id)}
            tabIndex="-1"
          >
            <audio className="clip" id={element.keyTrigger} src={element.url} />
            {element.keyTrigger}
          </button>
        );
      })}
    </section>
  );
};

export default KeyPad;
