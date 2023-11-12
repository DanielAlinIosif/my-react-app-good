/* eslint-disable no-unused-vars */
/* eslint-disable no-template-curly-in-string */
import React from "react";
import "./Badge.css";

// eslint-disable-next-line no-unused-vars
const BADGE_COLORS = ["grey", "yellow", "blue", "green"];

const Badge = (props) => {
  const badgeColors = BADGE_COLORS.includes(props.color) ? props.color : "grey";
  return <p className={"status ${BadgeColors}"}>{props.label}</p>;
};

export default Badge;
