import logo from "./logo.svg";
import "./App.css";
import TaskCard from "./components/TaskCard/TaskCard";

//function App(){}
const App = () => {
  const data = [
    {
      id: "T-1",
      status: "Todo",
      description: " Create a Design System for Enum Workspace",
      dueDate: new Date(2021, 5, 24),
    },
    {
      id: "T-6",
      status: "complete",
      description: "Design System for Enum Workspace",
      dueDate: new Date(2025, 5, 24),
    },
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
    </>
  );
};

export default App;
