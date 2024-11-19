import express from 'express'
import { createEvent, deleteEvent, editEvent, getAllEvents, getEvent } from '../controllers/EventControllers.js'
const router = express.Router()

router.get('/', getAllEvents);  // Obtener todos los eventos
router.get('/:id', getEvent);   // Obtener un evento por su ID
router.post('/', createEvent);  // Crear un nuevo evento
router.put('/:id', editEvent);  // Editar un evento por su ID
router.delete('/:id', deleteEvent);  // Eliminar un evento por su ID


export default router