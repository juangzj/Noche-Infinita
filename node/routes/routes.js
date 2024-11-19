import express from 'express'
import { createEvent, deleteEvent, editEvent, getAllEvents, getEvent, getEventNombreEstado } from '../controllers/EventControllers.js'
const router = express.Router()

router.get('/search', getEventNombreEstado);
router.get('/', getAllEvents);
router.get('/:id', getEvent);
router.post('/', createEvent);
router.put('/:id', editEvent);
router.delete('/:id', deleteEvent);




export default router