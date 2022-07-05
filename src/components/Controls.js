import PowerSwitch from "../features/PowerSwitch/PowerSwitch";
import MessageScreen from "../features/MessageScreen/MessageScreen";
import BankSelector from "../features/BankSelector/BankSelector";
import Volume from "../features/Volume/Volume";

const Controls = () => {
  return (
    <section id="display">
      <PowerSwitch text="Power" />
      <MessageScreen />
      <Volume />
      <BankSelector />
    </section>
  );
};

export default Controls;
