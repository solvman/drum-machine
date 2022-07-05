import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleBank } from "./BankSelectorSlice";

function BankSelector() {
  const currentBank = useSelector((state) => state.bank.name);
  const dispatch = useDispatch();

  return (
    <div className="banks">
      <label onClick={() => dispatch(toggleBank())}>
        <input
          type="radio"
          name="bank"
          value="Bank 1"
          checked={"Bank 1" === currentBank}
        ></input>
        <div className="bank">
          <p className="bank-title">Bank 1</p>
        </div>
      </label>
      <label onClick={() => dispatch(toggleBank())}>
        <input
          type="radio"
          name="bank"
          value="Bank 2"
          checked={"Bank 2" === currentBank}
        ></input>
        <div className="bank">
          <p className="bank-title">Bank 2</p>
        </div>
      </label>
    </div>
  );
}

export default BankSelector;
