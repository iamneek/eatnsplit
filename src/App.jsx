import React, { useState } from "react";
import Friends from "./Friends";
import Button from "./Button";
import AddFriendForm from "./AddFriendForm";
import FormSplitBill from "./FormSplitBill";

const App = () => {
  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];
  const [frnds, setFrnds] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const handleShowAddFriend = () => {
    setShowAddFriend((show) => !show);
    setSelectedFriend(null);
  };

  const handleSplitBill = (value) => {
    setFrnds(
      frnds.map((frnd) =>
        frnd.id === selectedFriend.id
          ? { ...frnd, balance: frnd.balance + value }
          : frnd
      )
    );
    setSelectedFriend(null);
  };

  const handleSelectedFriend = (friend) => {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <Friends
          friends={frnds}
          onSelection={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && (
          <AddFriendForm
            setFrnds={setFrnds}
            frnds={frnds}
            handleShowAddFriend={handleShowAddFriend}
          />
        )}
        <Button
          name={showAddFriend ? "Close" : "Add friend"}
          onClicks={handleShowAddFriend}
        />
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFrnd={selectedFriend}
          onSplit={handleSplitBill}
        />
      )}
    </div>
  );
};

export default App;
