const PowerSwitch = ({ text, setBank, setMessage }) => {
  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        id="toggle-switch"
        onChange={() => {
          setBank((prev) => {
            setMessage(prev ? "Bank 2" : "Bank 1");
            return !prev;
          });
        }}
      />
      <p className="toggle-text">{text}</p>
      <div className="toggle-fill"></div>
    </label>
  );
};

export default PowerSwitch;
