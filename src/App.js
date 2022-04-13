import { NavbarToDo } from "./components/NavbarToDo";
import { Input } from "./components/Input";
import { TaskList } from "./components/TaskList";
import { useState } from "react";

function App() {
  const [newTask, setNewTask] = useState({
    task: "",
    when: "",
  });

  const [taskList, setTaskList] = useState([]);

  return (
    <div className="App">
      <NavbarToDo />
      <Input
        catchNewTask={setNewTask}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      {/* Criar um novo componente, esse componente tem que receber a nova task e acrescentar isso numa lista de tasks */}
      <TaskList tasks={taskList} />
    </div>
  );
}

export default App;
