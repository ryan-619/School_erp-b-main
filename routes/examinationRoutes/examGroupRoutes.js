import express from 'express';
import { getAll, getById, create, update, remove } from '../../controllers/examinationController/examGroupController.js';

const router = express.Router();

router.get('/',        getAll);
router.post('/',       create);
router.get('/:id',     getById);
router.put('/:id',     update);
router.delete('/:id',  remove);

export default router;
