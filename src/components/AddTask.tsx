import React, { useState } from 'react';

interface AddTaskProps {
  onAddTask: (taskText: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTask(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="What else?"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
