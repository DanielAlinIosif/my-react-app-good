import React, { useState } from "react";
import "./App.css";
import TaskViewer from "./components/TaskViewer/TaskViewer";
import CreateTaskForm from "./components/CreateTaskForm/CreateTaskForm";
const data = [
  {
    id: "T-1",
    status: "Todo",
    description: " Create a Design System for Enum Workspace",
    dueDate: new Date(2021, 5, 24)
  },
  {
    id: "T-2",
    status: "Complete",
    description: "Design System for Enum Workspace",
    dueDate: new Date(2025, 5, 24)
  },
  {
    id: "T-3",
    status: "In progress",
    description: "Enum Workspace",
    dueDate: new Date(2023, 8, 24)
  },
  {
    id: "T-4",
    status: "Pending",
    description: "Something - Enum Workspace",
    dueDate: new Date(2023, 8, 24)
  }
];

const App = () => {
  const [taskData, setTaskData] = useState(data);

  const onAddTask = (newTask) => {
    // eslint-disable-next-line no-unused-vars
    var oVariabila = "ceva";
    console.log("Task adaugat din App.jsx: ", newTask);
    setTaskData((prevState) => [
      ...prevState,
      {
        ...newTask,
        id: `T-${prevState.length + 1}`,
        dueDate: new Date(newTask.dueDate)
      }
    ]);
  };

  // eslint-disable-next-line no-undef
  console.log("o variabila", oVariabila);

  return (
    <div className="page-container">
      <TaskViewer dataFields={taskData} onAddTask={onAddTask} />
      <CreateTaskForm />
    </div>
  );
};

export default App;
