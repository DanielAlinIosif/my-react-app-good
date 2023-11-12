import React from "react";
import "./TaskCard.css";
// eslint-disable-next-line no-unused-vars
import Badge from "../common/badge/Badge";

const TaskCard = (props) => {
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
    debugger;
  };
  return (
    <div className="task-container">
      <div className="taskHeader">
        <p className="id">{props.id}</p>
        <Badge label={props.status} color={styleBadge()} />
      </div>
      <div className="taskContent">{props.description}</div>
      <div className="taskFooter">
        <p className="dueDateLabel">Due Date</p>
        <p className="dueDate">{props.dueDate.toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default TaskCard;
