const express = require('express');
const router = express.Router();
const tareaController = require('../Controllers/tarea.controller');

router.post('/', tareaController.createTarea);
router.get('/', tareaController.getAllTareas);
router.get('/:id', tareaController.getTareaById);
router.put('/:id', tareaController.updateTarea);
router.delete('/:id', tareaController.deleteTarea);

module.exports = router;
