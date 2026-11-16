import { useState } from "react";

// Componente de registro: envía los datos del nuevo usuario al servicio web
function Registro() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");

  async function manejarEnvio(e) {
    e.preventDefault();
    try {
      // Petición POST al servicio /registro
      const respuesta = await fetch("http://localhost:3000/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, correo, clave }),
      });
      const datos = await respuesta.json();
      alert(datos.mensaje);

      // Si se registró bien, limpiamos los campos
      if (respuesta.ok) {
        setNombre("");
        setCorreo("");
        setClave("");
      }
    } catch (error) {
      alert("No se pudo conectar con el servicio web");
    }
  }

  return (
    <div>
      <h2>Registro</h2>

      <form onSubmit={manejarEnvio}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

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

        <button type="submit">Registrarme</button>
      </form>
    </div>
  );
}

export default Registro;