import ToggleSwitch from "./ToggleSwitch";

const Controls = ({ message, setBank, setMessage }) => {
  return (
    <section id="display">
      <ToggleSwitch text="Power" />
      <div className="message-screen">
        <p className="message">{message}</p>
      </div>
      <input type="range" id="volume"></input>
      <ToggleSwitch text="Bank" setBank={setBank} setMessage={setMessage} />
    </section>
  );
};

export default Controls;
