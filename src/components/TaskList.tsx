import React from "react";

interface Task {
  id: string;
  text: string;
  done: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onChangeTask: (updatedTask: Task) => void;
  onDeleteTask: (taskId: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onChangeTask,
  onDeleteTask,
}) => {
  return (
    <div id="taskList">
      {tasks.map((task) => (
        <div key={task.id}>
          <input
            id={task.id}
            type="checkbox"
            checked={task.done}
            onChange={() => onChangeTask({ ...task, done: !task.done })}
          />
          <span>{task.text}</span>
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
