import express from 'express';

import {
    getAllDailyAssignments,
    getDailyAssignmentById,
    createDailyAssignment,
    updateDailyAssignment,
    deleteDailyAssignment
} from '../../controllers/homeworkController/dailyAssignmentController.js';

const router = express.Router();

router.get('/', getAllDailyAssignments);

router.get('/:id', getDailyAssignmentById);

router.post('/', createDailyAssignment);

router.put('/:id', updateDailyAssignment);

router.delete('/:id', deleteDailyAssignment);

export default router;
