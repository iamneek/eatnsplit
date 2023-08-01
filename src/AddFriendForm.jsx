import React, { useState } from "react";
import Button from "./Button";

const AddFriendForm = ({ setFrnds, frnds, handleShowAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImg] = useState("https://i.pravatar.cc/48");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = { id, name, image: `${image}?u=${id}`, balance: 0 };
    setName("");
    setImg("https://i.pravatar.cc/48");
    handleShowAddFriend();
    setFrnds([...frnds, newFriend]);
  };
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👫 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label>🌄 Image Url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => {
          setImg(e.target.value);
        }}
      />
      <Button name={"Add"} />
    </form>
  );
};

export default AddFriendForm;
