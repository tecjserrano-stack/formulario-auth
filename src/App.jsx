import { useState } from "react";
import Registro from "./components/Registro";
import Login from "./components/Login";

function App() {
  const [usuarios, setUsuarios] = useState([
    { nombre: "Admin", correo: "admin@correo.com", clave: "1234" },
  ]);
  const [usuarioActual, setUsuarioActual] = useState(null);

  function agregarUsuario(nuevo) {
    setUsuarios([...usuarios, nuevo]);
  }

  if (usuarioActual) {
    return (
      <div>
        <h2>Bienvenido, {usuarioActual.nombre}</h2>
        <button onClick={() => setUsuarioActual(null)}>Cerrar sesión</button>
      </div>
    );
  }

  return (
    <div>
      <Login usuarios={usuarios} iniciarSesion={setUsuarioActual} />
      <hr />
      <Registro agregarUsuario={agregarUsuario} />
      <p>Usuarios registrados: {usuarios.length}</p>
    </div>
  );
}

export default App;