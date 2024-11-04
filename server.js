const express = require('express');
const cors = require('cors');

const departamentoRoutes = require('./App/Router/departamento.routes');
const empleadoRoutes = require('./App/Router/empleado.routes');
const clienteRoutes = require('./App/Router/cliente.routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/departamentos', departamentoRoutes);
app.use('/api/empleados', empleadoRoutes);
app.use('/api/clientes', clienteRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
