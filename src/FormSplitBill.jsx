import React, { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({ selectedFrnd, onSplit }) => {
  const [billValue, setBillValue] = useState("");
  const [userExp, setUserExp] = useState("");
  const paidByFriend = billValue ? billValue - userExp : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!billValue || !paidByFriend) return;
    onSplit(whoIsPaying === "user" ? paidByFriend : -userExp);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>SPLIT A BILL WITH {" " + selectedFrnd.name}</h2>
      <label>💰 Bill value</label>
      <input
        type="text"
        value={billValue}
        onChange={(e) => {
          setBillValue(Number(e.target.value));
        }}
      />
      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={userExp}
        onChange={(e) => {
          setUserExp(
            Number(e.target.value) > billValue
              ? userExp
              : Number(e.target.value)
          );
        }}
      />
      <label>🧍 {selectedFrnd.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />
      <label>🤑 Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => {
          setWhoIsPaying(e.target.value);
        }}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFrnd.name}</option>
      </select>
      <Button name={"Split bill"} />
    </form>
  );
};

export default FormSplitBill;
