import InputField from "../ui/InputField";
import Button from "../ui/Button";
import TextArea from "../ui/TextArea";
import buttonStyles from "../ui/css/Button.module.css";
import inputStyles from "../ui/css/InputField.module.css";
import textAreaStyles from "../ui/css/TextArea.module.css";
import taskFormStyles from "./css/TaskForm.module.css";

type TaskFormProps = {
  title: string;
  description: string;
  onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDescriptionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
};

const TaskForm = ({
  title,
  description,
  onTitleChange,
  onDescriptionChange,
  onSubmit,
}: TaskFormProps) => (
  <div className={taskFormStyles.taskForm}>
    <InputField
      className={inputStyles.input}
      type="text"
      value={title}
      placeholder="Título de la tarea"
      onChange={onTitleChange}
    />

    <TextArea
      className={textAreaStyles.textArea}
      value={description}
      placeholder="Descripción de la tarea"
      onChange={onDescriptionChange}
    />

    <Button className={buttonStyles.button__addTask} onClick={onSubmit}>
      Agregar tarea
    </Button>
  </div>
);

export default TaskForm;
