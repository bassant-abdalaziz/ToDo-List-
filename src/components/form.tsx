import { useState } from "react";
import Button from "./button";

interface IFormProps {
  addNewTask: (task: string) => void;
}

const Form: React.FC<IFormProps> = ({ addNewTask }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue !== "") {
      addNewTask(inputValue);
      setInputValue("");
    }
  };

  return (
    <form className="bg-white flex items-center border-2 border-gray-200 rounded-lg p-5">
      <input
        type="text"
        className="p-2 border border-gray-300 rounded-lg flex-1 focus:outline-none"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button onClickFun={addTask}>Add</Button>
    </form>
  );
};

export default Form;
