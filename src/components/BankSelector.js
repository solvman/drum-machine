import React from "react";

function BankSelector() {
  return (
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
  );
}

export default BankSelector;
