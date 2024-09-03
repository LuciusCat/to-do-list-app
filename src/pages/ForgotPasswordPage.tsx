import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./css/LoginPage.module.css";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Se ha enviado un correo de recuperación a: ${email}`);
  };

  return (
    <div className={styles.form}>
      <h2>Recuperar Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Enviar correo de recuperación</button>
        <button>
          <Link to="/">Ir al inicio de Sesión</Link>
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
