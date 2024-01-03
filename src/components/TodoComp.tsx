import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "../styles/styles.css";

interface Task {
  id: number;
  text: string;
  done: boolean;
}

const Todo: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(getInitialTasks());

  useEffect(() => {
    Cookies.set("tasks", JSON.stringify(tasks), { expires: 100, sameSite: 'Lax' });
  }, [tasks]);

  function handleAddTask(text: string) {
    const newTask: Task = {
      id: nextId++,
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

  function handleDeleteTask(taskId: number) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <div className="container todoForm">
        <AddTask onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onChangeTask={handleChangeTask}
          onDeleteTask={handleDeleteTask}
        />
    </div>
  );
};

let nextId = getInitialMaxId() + 1;

function getInitialTasks(): Task[] {
  const savedTasks = Cookies.get("tasks");
  const tasks = savedTasks ? JSON.parse(savedTasks) : [
    { id: 0, text: "Log into systems", done: false },
    { id: 1, text: "Check the schedule", done: false },
    { id: 2, text: "Test radios and tones", done: false },
  ];
  return tasks;
}

function getInitialMaxId(): number {
  const tasks = getInitialTasks();
  return tasks.reduce((maxId, task) => Math.max(task.id, maxId), -1);
}

export default Todo;