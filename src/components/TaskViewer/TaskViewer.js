import React from "react";
import TaskCard from"./TaskCard/TaskCard";
const TaskViewer = (props) => {
    return (
 <div>
  <TaskCard 
    id={data[1].id}
    status={data[0].status}
    description={data[0].description}
    dueDate={data[0].dueDate}/>
  <TaskCard 
    id={data[3].id}
    status={data[1].status}
    description={data[1].description}
    dueDate={data[1].dueDate}/>
    </div>
    )
};

export default TaskViewer;