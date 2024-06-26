import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { v4 as uuidv4 } from "uuid";

interface Task {
  id: string;
  text: string;
  done: boolean;
}

const Todo: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(getInitialTasks());

  useEffect(() => {
    Cookies.set("tasks", JSON.stringify(tasks), {
      expires: 100,
      sameSite: "Lax",
    });
  }, [tasks]);

  function handleAddTask(text: string) {
    const newTask: Task = {
      id: uuidv4(),
      text,
      done: false,
    };
    setTasks([...tasks, newTask]);
  }

  function handleChangeTask(updatedTask: Task) {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)),
    );
  }

  function handleDeleteTask(taskId: string) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <div className="todo">
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

function getInitialTasks(): Task[] {
  const savedTasks = Cookies.get("tasks");
  const tasks = savedTasks
    ? JSON.parse(savedTasks)
    : [
        { id: uuidv4(), text: "Log into systems", done: false },
        { id: uuidv4(), text: "Check the schedule", done: false },
        { id: uuidv4(), text: "Test radios and tones", done: false },
      ];
  return tasks;
}

export default Todo;
