import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  completeTask,
} from "../services/taskService";
import { useState } from "react";
import { Task } from "../types/Task";
import taskListFormStyles from "./css/TaskListForm.module.css";

const TaskListForm = () => {
  const queryClient = useQueryClient();
  const [newTask, setNewTask] = useState<Task>({
    title: "",
    description: "",
    completed: false,
  });

  const { data: tasks, isLoading, isError } = useQuery("tasks", getTasks);

  const mutationCreate = useMutation(createTask, {
    onSuccess: () => queryClient.invalidateQueries("tasks"),
  });

  const mutationUpdate = useMutation(updateTask, {
    onSuccess: () => queryClient.invalidateQueries("tasks"),
  });

  const mutationDelete = useMutation(deleteTask, {
    onSuccess: () => queryClient.invalidateQueries("tasks"),
  });

  const mutationComplete = useMutation(completeTask, {
    onSuccess: () => queryClient.invalidateQueries("tasks"),
  });

  const handleAddTask = (task: Task) => {
    if (task.title && task.description) {
      mutationCreate.mutate(task);
      setNewTask({ title: "", description: "", completed: false });
    } else {
      alert("Por favor, rellena todos los campos.");
    }
  };

  const handleEditTask = (task: Task) => {
    mutationUpdate.mutate(task);
  };

  const handleDeleteTask = (id: number) => {
    mutationDelete.mutate(id);
  };

  const handleCompleteTask = (task: Task) => {
    mutationComplete.mutate(task);
  };

  if (isLoading) return <div>Cargando...</div>;
  if (isError) return <div>Error al cargar tareas</div>;

  return (
    <section className={taskListFormStyles.taskListForm}>
      <h2>Lista de Tareas</h2>
      <TaskForm
        title={newTask.title}
        description={newTask.description}
        onTitleChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        onDescriptionChange={(e) =>
          setNewTask({ ...newTask, description: e.target.value })
        }
        onSubmit={() => handleAddTask(newTask)}
      />
      <TaskList
        tasks={tasks}
        onUpdate={handleEditTask}
        onDelete={handleDeleteTask}
        onComplete={handleCompleteTask}
      />
    </section>
  );
};

export default TaskListForm;
