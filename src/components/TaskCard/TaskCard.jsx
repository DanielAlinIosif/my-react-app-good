import React from "react";
import "./TaskCard.css";
import "../common/badge/Badge";

const TaskCard = (props) => {
  return (
    <div className="task-container">
      <div className="taskHeader">
        <p className="id">{props.id}</p>
        <Badge status={props.status} />
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
