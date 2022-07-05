import ToggleSwitch from "./ToggleSwitch";
import MessageScreen from "./MessageScreen";

const Controls = () => {
  return (
    <section id="display">
      <ToggleSwitch text="Power" />
      <MessageScreen />
      <input type="range" id="volume"></input>
      <div className="banks">
        <label>
          <input type="radio" name="bank" value="1"></input>
          <div className="bank">
            <p className="bank-title">Bank 1</p>
          </div>
        </label>

        <label>
          <input type="radio" name="bank" value="2"></input>
          <div className="bank">
            <p className="bank-title">Bank 2</p>
          </div>
        </label>
      </div>
    </section>
  );
};

export default Controls;
