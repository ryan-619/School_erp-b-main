import express from 'express';

import {
    getAllExamResult,
    createExamResult,
    updateExamResult,
    deleteExamResult
} from '../../controllers/examinationController/examResultController.js';

const router = express.Router();

router.get('/', getAllExamResult);

router.post('/', createExamResult);

router.put('/:id', updateExamResult);

router.delete('/:id', deleteExamResult);

export default router;