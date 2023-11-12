import "./App.css";
import TaskCard from "./components/TaskCard/TaskCard";

const App = () => {
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

  return (
    <>
      <TaskCard
        id={data[0].id}
        status={data[0].status}
        description={data[0].description}
        dueDate={data[0].dueDate}
      />
      <TaskCard
        id={data[1].id}
        status={data[1].status}
        description={data[1].description}
        dueDate={data[1].dueDate}
      />
      <TaskCard
        id={data[2].id}
        status={data[2].status}
        description={data[2].description}
        dueDate={data[2].dueDate}
      />
      <TaskCard
        id={data[3].id}
        status={data[3].status}
        description={data[3].description}
        dueDate={data[3].dueDate}
      />
    </>
  );
};

export default App;
