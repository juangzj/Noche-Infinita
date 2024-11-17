import express from 'express';
import { createVentaBebida, deleteVentaBebida, editVentaBebida, getAllVentasBebidas, getVentaBebida } from '../controllers/VentasBebidasController.js';
import { createReservaVip, getReservaVip } from '../controllers/ReservasVipController.js';

const router = express.Router()

router.get('/', getAllVentasBebidas)
router.get('/:id', getVentaBebida)
router.post('/', createVentaBebida)
router.put('/', editVentaBebida)
router.delete('/:id', deleteVentaBebida)

export default router