import express from 'express'
import { createReservaVip, deleteReservaVip, editReservaVip, getAllReservasVip, getReservaVip } from '../controllers/ReservasVipController.js'

const router = express.Router()

router.get('/', getAllReservasVip)
router.get('/:id', getReservaVip)
router.post('/', createReservaVip)
router.put('/', editReservaVip)
router.delete('/:id', deleteReservaVip)

export default router