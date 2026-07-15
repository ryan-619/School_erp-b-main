import express from 'express';
import { crudFactory } from '../utils/crudFactory.js';
import { studentSchema } from '../models/studentInformationModels/studentModel.js';

const router = express.Router();
const ctrl = crudFactory(studentSchema, 'Student');

router.get('/students',       ctrl.getAll);
router.get('/students/:id',   ctrl.getById);
router.post('/students',      ctrl.create);
router.put('/students/:id',   ctrl.update);
router.delete('/students/:id', ctrl.delete);

export default router;
