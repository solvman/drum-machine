import { useSelector, useDispatch } from "react-redux";
import { flipPower } from "./PowerSwitchSlice";

const PowerSwitch = () => {
  const power = useSelector((state) => state.powerswitch.power);
  const dispatch = useDispatch();

  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        id="toggle-switch"
        checked={power}
        onChange={() => dispatch(flipPower())}
      />
      <p className="toggle-text">power</p>
      <div className="toggle-fill"></div>
    </label>
  );
};

export default PowerSwitch;
