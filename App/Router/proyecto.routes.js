const express = require('express');
const router = express.Router();
const proyectoController = require('../Controllers/proyecto.controller');

router.post('/', proyectoController.createProyecto);
router.get('/', proyectoController.getAllProyectos);
router.get('/:id', proyectoController.getProyectoById);
router.put('/:id', proyectoController.updateProyecto);
router.delete('/:id', proyectoController.deleteProyecto);

module.exports = router;
