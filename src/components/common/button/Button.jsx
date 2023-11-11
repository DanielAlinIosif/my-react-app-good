import React from "react";
import "./Button.css";

const Button = (props) => {
  console.log("Button props", props.onClick);
  return (
    <button className="primary-button" onClick={props.onClick}>
      Create Task
    </button>
  );
};

export default Button;
