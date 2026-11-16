import { useState } from "react";

// Componente de inicio de sesión: envía el correo y la clave al servicio web
function Login({ iniciarSesion }) {
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");

  async function manejarEnvio(e) {
    e.preventDefault();
    try {
      // Petición POST al servicio /login
      const respuesta = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correo, clave }),
      });
      const datos = await respuesta.json();

      if (respuesta.ok) {
        // Autenticación satisfactoria: avisamos a App quién entró
        alert(datos.mensaje);
        iniciarSesion({ nombre: datos.nombre });
      } else {
        // El servicio respondió con error de autenticación
        alert(datos.mensaje);
      }
    } catch (error) {
      // El servidor no responde (apagado o puerto incorrecto)
      alert("No se pudo conectar con el servicio web");
    }
  }

  return (
    <div>
      <h2>Iniciar sesión</h2>

      <form onSubmit={manejarEnvio}>
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
        />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;