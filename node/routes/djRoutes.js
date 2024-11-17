import express from 'express';
import { createDj, deleteDj, editDj, getAllDjs, getDj } from '../controllers/DjController.js';

const router = express.Router()

router.get('/', getAllDjs)
router.get('/:id', getDj)
router.post('/', createDj)
router.put('/', editDj)
router.delete('/:id', deleteDj)

export default router