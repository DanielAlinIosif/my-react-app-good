import React from "react";
import "./Badge.css";

// eslint-disable-next-line no-unused-vars
const BADGE_COLORS = ["grey", "yellow", "blue", "green"]; 

const Badge = (props) => {
  // eslint-disable-next-line no-unused-vars
  const badgeColors = BADGE_COLORS.includes(props.color) ? props.color: "grey"
  // eslint-disable-next-line no-template-curly-in-string
  return <p className={"status ${badgeColors}"}>{props.label}</p>;
};

export default Badge;
