import TaskEditing from "./TaskEditing";
import { useState } from "react";
import { Task } from "../types/Task";
import taskListStyles from "./css/TaskList.module.css";

interface TaskListProps {
  tasks: Task[];
  onUpdate: (task: Task) => void;
  onDelete: (id: number) => void;
  onComplete: (task: Task) => void;
}

const TaskList = ({ tasks, onUpdate, onDelete, onComplete }: TaskListProps) => {
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);

  const handleEditClick = (taskId: number) => {
    setEditingTaskId(taskId);
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null);
  };

  return (
    <ul className={taskListStyles.taskList}>
      {tasks.map((task) => (
        <TaskEditing
          key={task.id}
          task={task}
          isEditing={editingTaskId === task.id}
          onEditClick={() => task.id !== undefined && handleEditClick(task.id)}
          onCancelEdit={handleCancelEdit}
          onUpdate={onUpdate}
          onDelete={() => task.id !== undefined && onDelete(task.id)}
          onComplete={() => onComplete(task)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
