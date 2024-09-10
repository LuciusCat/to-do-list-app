import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Input from "../ui/InputField";
import Label from "../ui/Label";
import inputStyles from "../ui/css/InputField.module.css";
import buttonStyles from "../ui/css/Button.module.css";
import formStyles from "./css/Form.module.css";
import labelStyles from "../ui/css/Label.module.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email);
    navigate("/home");
  };

  return (
    <section className={formStyles.form}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <Label className={labelStyles.label} htmlFor="email">
          Ingrese su correo electrónico:{" "}
        </Label>
        <Input
          className={inputStyles.input}
          type="email"
          id="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Label className={labelStyles.label} htmlFor="password">
          Ingrese su contraseña:{" "}
        </Label>
        <Input
          className={inputStyles.input}
          type="password"
          id="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button className={buttonStyles.button__addTask} type="submit">
          Iniciar Sesión
        </Button>
        <Button className={buttonStyles.button__addTask}>
          <Link to="/forgot-password">Recuperar contraseña</Link>
        </Button>
      </form>
    </section>
  );
};

export default LoginPage;
