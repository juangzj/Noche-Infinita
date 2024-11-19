import express from 'express'
import { createExperienciaCliente, deleteExperienciaCliente, editExperienciaCLiente, getAllExprienciasCliente, getExperienciaCliente } from '../controllers/experienciaClienteController.js'
const router = express.Router()

router.get('/', getAllExprienciasCliente)
router.get('/:id', getExperienciaCliente)
router.post('/', createExperienciaCliente)
router.put('/', editExperienciaCLiente)
router.delete('/:id', deleteExperienciaCliente)

export default router