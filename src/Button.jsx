import React from "react";

const Button = ({ name, onClicks }) => {
  return (
    <button className="button" onClick={onClicks}>
      {name}
    </button>
  );
};

export default Button;
