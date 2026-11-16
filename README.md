# Formulario de Registro e Inicio de Sesión

Evidencia GA7-220501096-AA5-EV01. Diseño y desarrollo de servicios web.

Aplicación con un servicio web (Node + Express) que permite registrar usuarios e iniciar sesión, y un frontend en React (Vite) que consume ese servicio.

## Tecnologías

- React + Vite (frontend)
- Node.js + Express (servicio web)
- CORS

## Estructura

```
formulario-auth/
  servidor/        Servicio web (server.js)
  src/
    components/    Login.jsx y Registro.jsx
    App.jsx
  README.md
```

## Instalación

1. Instalar dependencias del frontend (en la carpeta raíz):

```
npm install
```

2. Instalar dependencias del servicio web:

```
cd servidor
npm install
```

## Ejecución

Se necesitan dos terminales.

Terminal 1, servicio web:

```
cd servidor
node server.js
```

Terminal 2, frontend:

```
npm run dev
```

Abrir http://localhost:5173/

## Servicios web

| Método | Ruta | Datos | Respuesta |
|---|---|---|---|
| GET | / | | Servicio web activo |
| POST | /registro | nombre, correo, clave | Usuario registrado correctamente |
| POST | /login | correo, clave | Autenticación satisfactoria (200) o Error en la autenticación (401) |

## Usuario de prueba

- Correo: admin@correo.com
- Contraseña: 1234

## Nota

Los usuarios se guardan en memoria; se pierden al reiniciar el servidor.