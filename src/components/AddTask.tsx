import React, { useState } from "react";

interface AddTaskProps {
  onAddTask: (taskText: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddTask(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="taskInput"></label>
      <input
        id="taskInput"
        type="text"
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
        placeholder="What else?"
      />

      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
