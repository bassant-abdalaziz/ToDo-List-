import { useEffect, useState } from "react";
import Form from "./components/form";
import { Tasks } from "./components/tasks/tasks";

function App() {
  const [tasks, setTasks] = useState<string[]>(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  // Update local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //add task
  const addNewTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  //delete task
  const deleteTask = (item: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== item);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <>
      <div className="mx-auto w-[90%] md:w-[50%] lg:w-[35%]">
        <h1 className=" text-[#905050] text-3xl font-bold text-center my-10">
          My Tasks ..
        </h1>
        <Form addNewTask={addNewTask} />
        <Tasks tasks={tasks} deleteTask={deleteTask} />
      </div>
    </>
  );
}

export default App;
