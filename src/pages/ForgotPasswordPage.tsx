import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, InputField } from "../ui";
import formStyles from "./css/Form.module.css";
import inputStyles from "../ui/css/InputField.module.css";
import buttonStyels from "../ui/css/Button.module.css";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Se ha enviado un correo de recuperación a: ${email}`);
  };

  return (
    <section className={formStyles.form}>
      <h2>Recuperar Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          className={inputStyles.input}
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button className={buttonStyels.button__addTask} type="submit">
          Enviar correo de recuperación
        </Button>
        <Button className={buttonStyels.button__addTask}>
          <Link to="/">Ir al inicio de Sesión</Link>
        </Button>
      </form>
    </section>
  );
};

export default ForgotPasswordPage;
