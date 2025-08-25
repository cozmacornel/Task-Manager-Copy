import "./App.css";
import TaskCard from "./components/task-card/TaskCard";

function App() {
  const data = [
    {
      id: "T-1",
      name: "Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2025, 7, 25), // 25 august 2025
    },
    {
      id: "T-2",
      name: "12 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: new Date(2022, 7, 24),
    },
      {
        id: "T-3",
        name: "Finalize documentatia pentru Task Manager.",
        status: "Done",
        dueDate: new Date(2022, 8, 30),
      },
  ];

  return (
    <div className="app-container">
      <TaskCard
        id={data[0].id}
        status={data[0].status}
        name={data[0].name}
        dueDate={data[0].dueDate}
      />
      <TaskCard
        id={data[1].id}
        status={data[1].status}
        name={data[1].name}
        dueDate={data[1].dueDate}
      />
        <TaskCard
          id={data[2].id}
          status={data[2].status}
          name={data[2].name}
          dueDate={data[2].dueDate}
        />
    </div>
  );
}

export default App;
