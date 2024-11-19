import express from 'express';
import { getAllSistemasIluminacion, getSistemaIluminacion, createSistemaIluminacion, editSistemaIluminacion, deleteSistemaIluminacion, } from '../controllers/SistemaIluminancionController.js';

const router = express.Router();

// Rutas para el CRUD de sistemas de iluminación
router.get('/', getAllSistemasIluminacion);
router.get('/:id', getSistemaIluminacion);
router.post('/', createSistemaIluminacion);
router.put('/:id', editSistemaIluminacion);
router.delete('/:id', deleteSistemaIluminacion);

export default router;
