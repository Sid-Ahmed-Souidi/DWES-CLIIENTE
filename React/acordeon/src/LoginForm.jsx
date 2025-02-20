import React, { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes hacer la lógica de autenticación con los servicios
    console.log("Email:", email);
    console.log("Contraseña:", password);
  };

  return (
    <div className="container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo Electrónico
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Introduce tu correo electrónico"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Introduce tu contraseña"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}