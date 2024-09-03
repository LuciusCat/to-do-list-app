import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  completeTask, // Nueva función
} from "../services/taskService";
import { Link } from "react-router-dom";
import { useState } from "react";

const TaskPage = () => {
  const queryClient = useQueryClient();
  const { data: tasks, isLoading, isError } = useQuery("tasks", getTasks);

  const mutationCreate = useMutation(createTask, {
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
    },
  });

  const mutationUpdate = useMutation(updateTask, {
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
    },
  });

  const mutationDelete = useMutation(deleteTask, {
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
    },
  });

  const mutationComplete = useMutation(completeTask, {
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
    },
  });

  const [newTask, setNewTask] = useState({ title: "", description: "" });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading tasks</div>;

  const handleAddTask = () => {
    if (!newTask.title) {
      alert("Title is required");
      return;
    }
    mutationCreate.mutate(newTask);
    setNewTask({ title: "", description: "" }); // Limpiar formulario
  };

  const handleUpdateTask = (task: any) => {
    mutationUpdate.mutate({ ...task, title: "Updated Task" });
  };

  const handleDeleteTask = (id: number) => {
    mutationDelete.mutate(id);
  };

  const handleCompleteTask = (id: number) => {
    mutationComplete.mutate(id);
  };

  return (
    <div>
      <h2>Task List</h2>
      <div>
        <input
          type="text"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          placeholder="Task Title"
        />
        <input
          type="text"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
          placeholder="Task Description"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks?.map((task: any) => (
          <li key={task.id}>
            <span>{task.title}</span>
            {task.completed ? <span>(Completed)</span> : null}
            <button onClick={() => handleUpdateTask(task)}>Update</button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            <button onClick={() => handleCompleteTask(task.id)}>
              {task.completed ? "Unmark" : "Complete"}
            </button>
          </li>
        ))}
      </ul>
      <button>
        <Link to="/">Go to Login</Link>
      </button>
    </div>
  );
};

export default TaskPage;
