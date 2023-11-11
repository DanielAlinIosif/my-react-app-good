import React from "react";
import "./Badge.css";

const Badge = (props) => {
  // eslint-disable-next-line no-template-curly-in-string
  return <p className={"status ${props.color}"}>{props.label}</p>;
};

export default Badge;
