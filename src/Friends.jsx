import React from "react";
import Friend from "./Friend";

const Friends = ({ friends, onSelection, selectedFriend }) => {
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <Friend
            key={friend.id}
            friend={friend}
            onSelection={onSelection}
            selectedFriend={selectedFriend}
          />
        );
      })}
    </ul>
  );
};

export default Friends;
