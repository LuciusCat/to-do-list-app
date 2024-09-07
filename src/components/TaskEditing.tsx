import { useState } from "react";
import { Task } from "../types/Task";
import InputField from "../ui/InputField";
import TextArea from "../ui/TextArea";
import Button from "../ui/Button";
import inputStyles from "../ui/css/InputField.module.css";
import textAreaStyles from "../ui/css/TextArea.module.css";
import buttonStyles from "../ui/css/Button.module.css";
import taskEditingStyles from "./css/TaskEditing.module.css";

interface TaskEditingProps {
  task: Task;
  isEditing: boolean;
  onEditClick: () => void;
  onCancelEdit: () => void;
  onUpdate: (task: Task) => void;
  onDelete: () => void;
  onComplete: () => void;
}

const TaskEditing = ({
  task,
  isEditing,
  onEditClick,
  onCancelEdit,
  onUpdate,
  onDelete,
  onComplete,
}: TaskEditingProps) => {
  const [editedTask, setEditedTask] = useState<Task>(task);

  const handleSave = () => {
    if (editedTask.title && editedTask.description) {
      onUpdate(editedTask);
      onCancelEdit();
    } else {
      alert("Por favor, completa el título y la descripción.");
    }
  };

  return (
    <li className={taskEditingStyles.taskEditing}>
      {isEditing ? (
        <div className={taskEditingStyles.isEditing}>
          <InputField
            className={inputStyles.input}
            type="text"
            value={editedTask.title}
            onChange={(e) =>
              setEditedTask({ ...editedTask, title: e.target.value })
            }
          />
          <TextArea
            className={textAreaStyles.textArea}
            value={editedTask.description}
            onChange={(e) =>
              setEditedTask({ ...editedTask, description: e.target.value })
            }
          />
          <div>
            <Button className={buttonStyles.button} onClick={handleSave}>
              Guardar cambios
            </Button>
            <Button className={buttonStyles.button} onClick={onCancelEdit}>
              Cancelar
            </Button>
          </div>
        </div>
      ) : (
        <article className={taskEditingStyles.taskEditing__card}>
          <div className={taskEditingStyles.card__header}>
            <h3 className={taskEditingStyles.taskTitle}>{task.title}</h3>
            <p className={taskEditingStyles.taskDescription}>
              {task.description}
            </p>
          </div>
          <div className={taskEditingStyles.button__container}>
            <Button
              className={buttonStyles.button__update}
              onClick={onEditClick}
            >
              Actualizar
            </Button>
            <Button className={buttonStyles.button__delete} onClick={onDelete}>
              Eliminar
            </Button>
            <Button
              className={buttonStyles.button__complete}
              onClick={onComplete}
            >
              {task.completed ? "Desmarcar" : "Completa"}
            </Button>
          </div>
        </article>
      )}
    </li>
  );
};

export default TaskEditing;
