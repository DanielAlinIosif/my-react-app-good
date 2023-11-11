import React from "react";
import "./Badge.css";

const Badge = (props) => {
  const styleBadge = () => {
    switch (props.status) {
      case "Todo":
        return "grey";
      case "Pending":
        return "yellow";
      case "In progress":
        return "blue";
      case "Complete":
        return "green";
      default:
        return "grey";
    }
  };
    
  return <p className="status">{props.status}</p>;
};

export default Badge;
