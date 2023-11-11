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
      status: "In progress",
      description: "Something - Enum Workspace",
      dueDate: new Date(2023, 8, 24)
    }
  ];

  return <></>;
};

export default App;
