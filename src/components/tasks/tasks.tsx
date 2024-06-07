import Task from "./task-item";

interface ITasks {
  tasks: string[];
  deleteTask: (item: number) => void;
}

export const Tasks = ({ tasks, deleteTask }: ITasks) => {
  return (
    <div className="bg-white border-2 border-gray-200 mt-5 rounded-lg p-5">
      {tasks.length !== 0 ? (
        tasks.map((task, index) => (
          <Task task={task} id={index} deleteTask={deleteTask} key={index} />
        ))
      ) : (
        <div className="text-center">No Tasks.</div>
      )}
    </div>
  );
};
