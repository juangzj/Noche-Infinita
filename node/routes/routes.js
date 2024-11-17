import express from 'express'
import { createEvent, deleteEvent, editEvent, getAllEvents, getEvent } from '../controllers/EventControllers.js'
const router = express.Router()

router.get('/', getAllEvents)
router.get('/:id', getEvent)
router.post('/', createEvent)
router.put('/', editEvent)
router.delete('/:id', deleteEvent)

export default router