const KeyPad = ({ bank, setMessage }) => {
  const playSound = (key, name) => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
    setMessage(name);
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
