import express from 'express'
import { createReservaVip, deleteReservaVip, editReservaVip, getAllReservasVip, getReservaVip, getReservaVipIdEstado } from '../controllers/ReservasVipController.js'

const router = express.Router()

router.get('/', getAllReservasVip)
router.get('/:id', getReservaVip)
router.post('/', createReservaVip)
router.put('/', editReservaVip)
router.delete('/:id', deleteReservaVip)
router.get('/', getReservaVipIdEstado)

export default router