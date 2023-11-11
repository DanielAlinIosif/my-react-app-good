import React from "react";
import TaskCard from "../TaskCard/TaskCard";
import "./TaskViewer.css";
import ControlPanel from "../ControlPanel/ControlPanel";
import EmptyListMessage from "../empty-list-message/EmptyListMessage";

const TaskViewer = (props) => {
  // console.log("Task viewer", props);
  return (
    <>
      <div className="viewer-container">
        <ControlPanel addTask={props.onAddTask} />

        {props.dataFields.length > 0 ? (
          <div className="cards-container">
            {props.dataFields.map((item, index) => (
              <TaskCard
                key={index}
                id={item.id}
                status={item.status}
                description={item.description}
                dueDate={item.dueDate}
              />
            ))}
          </div>
        ) : (
          <EmptyListMessage />
        )}
      </div>
    </>
  );
};

export default TaskViewer;
