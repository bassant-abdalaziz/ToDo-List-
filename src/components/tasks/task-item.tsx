import Button from "../button";
import { Trash2 } from "lucide-react";

interface ITask {
  task: string;
  id: number;
  deleteTask: (item: number) => void;
}

const Task = ({ task, id, deleteTask }: ITask) => {
  return (
    <div className="bg-white hover:bg-[#f1d2c142] p-2 rounded-md flex justify-between items-center transition duration-300 cursor-pointer border border-gray-300 my-4">
      <p>{task}</p>
      <Button onClickFun={() => deleteTask(id)}>
        <Trash2 />
      </Button>
    </div>
  );
};

export default Task;
