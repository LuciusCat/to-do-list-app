import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  completeTask,
} from "../services/taskService";
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./css/TaskList.module.css";

const TaskList = () => {
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
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState<any>(null);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading tasks</div>;

  const handleAddTask = () => {
    if (!newTask.title) {
      alert("Agregue un título a la tarea");
      return;
    }
    mutationCreate.mutate(newTask);
    setNewTask({ title: "", description: "" });
  };

  const HandleEditClick = (task: any) => {
    setIsEditing(true);
    setCurrentTask(task);
  };

  const handleUpdateTask = () => {
    if (currentTask && currentTask.title) {
      mutationUpdate.mutate(currentTask);
      setIsEditing(false);
      setCurrentTask(null);
    } else {
      alert("Agregue un título a la tarea para actualizarla");
    }
  };

  const handleDeleteTask = (id: number) => {
    mutationDelete.mutate(id);
  };

  const handleCompleteTask = (task: any) => {
    mutationComplete.mutate(task);
  };

  return (
    <section className={styles.taskList}>
      <h2>Task List</h2>
      <div>
        <label htmlFor="taskTitle">Título de la tarea</label>
        <input
          id="taskTitle"
          type="text"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <label htmlFor="taskDescription">Descripción de la tarea</label>
        <textarea
          id="taskDescription"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
        />
        <button onClick={handleAddTask}>Agregar tarea</button>
      </div>
      <ul>
        {isEditing && currentTask && (
          <div>
            <h3>Editar Tarea</h3>
            <input
              type="text"
              value={currentTask.title}
              onChange={(e) =>
                setCurrentTask({ ...currentTask, title: e.target.value })
              }
              placeholder="Nuevo título"
            />

            <input
              type="text"
              value={currentTask.description}
              onChange={(e) =>
                setCurrentTask({ ...currentTask, description: e.target.value })
              }
              placeholder="Nueva descripción"
            />
            <button onClick={handleUpdateTask}>Guardar cambios</button>
            <button onClick={() => setIsEditing(false)}>Cancelar</button>
          </div>
        )}

        {tasks?.map((task: any) => (
          <li key={task.id}>
            <div>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </div>
            {task.completed ? <span>(Completa)</span> : null}
            <button onClick={() => HandleEditClick(task)}>Actualizar</button>
            <button onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
            <button onClick={() => handleCompleteTask(task)}>
              {task.completed ? "Desmarcar" : "Completa"}
            </button>
          </li>
        ))}
      </ul>
      <button>
        <Link to="/">Go to Login</Link>
      </button>
    </section>
  );
};

export default TaskList;
