import express from 'express'
import { createExperienciaCliente, getAllExprienciasCliente, getExperienciaCliente } from '../controllers/experienciaClienteController.js'
const router = express.Router()

router.get('/', getAllExprienciasCliente)
router.get('/:id', getExperienciaCliente)
router.post('/', createExperienciaCliente)
router.put('/',)
router.delete('/:id',)

export default router