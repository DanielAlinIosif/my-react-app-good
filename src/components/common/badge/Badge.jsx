import React from "react";
import "./badge/Badge.css";

const Badge = (props) => {
  // eslint-disable-next-line no-unused-vars
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
  return <p className={"status ${stylebadge}()"}>{props.status}</p>;
};

export default Badge;
