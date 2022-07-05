import ToggleSwitch from "./ToggleSwitch";
import MessageScreen from "./MessageScreen";
import BankSelector from "./BankSelector";
import Volume from "./Volume";

const Controls = () => {
  return (
    <section id="display">
      <ToggleSwitch text="Power" />
      <MessageScreen />
      <Volume />
      <BankSelector />
    </section>
  );
};

export default Controls;
