import express from 'express';

import {
    getAllExamSchedule,
    createExamSchedule,
    updateExamSchedule,
    deleteExamSchedule
} from '../../controllers/examinationController/examScheduleController.js';

const router = express.Router();

router.get('/', getAllExamSchedule);

router.post('/', createExamSchedule);

router.put('/:id', updateExamSchedule);

router.delete('/:id', deleteExamSchedule);

export default router;