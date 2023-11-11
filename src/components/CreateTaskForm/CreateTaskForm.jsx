import React, { useState } from "react";
import "./CreateTaskForm.css";
import Button from "../common/button/Button";

const CreateTaskForm = (props) => {
  // const [taskData, setTaskData] = useState({
  //   taskName: "",
  //   taskDate: "",
  //   taskDescription: "",
  // });

  // console.log(taskData);
  // const handleTaskName = (event) => {
  //   setTaskData((prevState) => ({
  //     ...taskData,
  //     taskName: event.target.value,
  //   }));
  // };

  // const handleTaskDate = (event) => {
  //   setTaskData((prevState) => ({
  //     ...taskData,
  //     taskDate: event.target.value,
  //   }));
  // };

  // const handleTaskDescription = (event) => {
  //   setTaskData((prevState) => ({
  //     ...taskData,
  //     taskDescription: event.target.value,
  //   }));
  // };

  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleTaskName = (event) => {
    setTaskName(event.target.value);
    // console.log(taskName);
  };

  const handleTaskDate = (event) => {
    setTaskDate(event.target.value);
    // console.log(taskDate);
  };

  const handleTaskDescription = (event) => {
    setTaskDescription(event.target.value);
    // console.log(taskDescription);
  };

  const resetState = () => {
    setTaskName("");
    setTaskDate("");
    setTaskDescription("");
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const newTask = {
      name: taskName,
      dueDate: taskDate,
      description: taskDescription,
      status: "Todo",
    };

    props.addTask(newTask);

    console.log("Task adaugat din CreateTaskForm.jsx: ", newTask);
    resetState();
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="form-row">
        <label for="taskName">Task Name</label>
        <input
          type="text"
          id="taskName"
          value={taskName}
          onChange={handleTaskName}
        />
      </div>
      <div className="form-row">
        <label for="taskDate">Due Date</label>
        <input
          type="date"
          id="taskDate"
          value={taskDate}
          onChange={handleTaskDate}
        />
      </div>
      <div className="form-row">
        <label for="taskDescription">Task Description</label>
        <textarea
          id="taskDescription"
          rows="4"
          cols="50"
          value={taskDescription}
          onChange={handleTaskDescription}
        />
      </div>
      <Button />
    </form>
  );
};

export default CreateTaskForm;
