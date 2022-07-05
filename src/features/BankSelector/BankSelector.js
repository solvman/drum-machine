import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentBank } from "./BankSelectorSlice";

function BankSelector() {
  const currentBank = useSelector((state) => state.bank.name);
  const dispatch = useDispatch();

  return (
    <div className="banks">
      <label>
        <input
          type="radio"
          name="bank"
          value="Bank 1"
          checked={"Bank 1" === currentBank}
          onChange={() => {}}
        ></input>
        <div
          className="bank"
          onClick={() => dispatch(setCurrentBank("Bank 1"))}
        >
          <p className="bank-title">Bank 1</p>
        </div>
      </label>
      <label>
        <input
          type="radio"
          name="bank"
          value="Bank 2"
          checked={"Bank 2" === currentBank}
          onChange={() => {}}
        ></input>
        <div
          className="bank"
          onClick={() => dispatch(setCurrentBank("Bank 2"))}
        >
          <p className="bank-title">Bank 2</p>
        </div>
      </label>
    </div>
  );
}

export default BankSelector;
