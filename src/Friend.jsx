import React from "react";
import Button from "./Button";

const Friend = ({ friend, onSelection, selectedFriend }) => {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""} key={friend.id}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">{`You owe ${friend.name} ${Math.abs(
          friend.balance
        )}€`}</p>
      )}
      {friend.balance > 0 && (
        <p className="green">{`${friend.name} owes you ${Math.abs(
          friend.balance
        )}€`}</p>
      )}
      {friend.balance === 0 && <p>{`You and ${friend.name} are even`}</p>}

      <button className="button" onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </button>
    </li>
  );
};

export default Friend;
