const express = require('express');
const cors = require('cors');

const usuarioRoutes = require('./App/Router/usuario.routes');
const proyectoRoutes = require('./App/Router/proyecto.routes');
const tareaRoutes = require('./App/Router/tarea.routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/usuarios', usuarioRoutes);
app.use('/api/proyectos', proyectoRoutes);
app.use('/api/tareas', tareaRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
