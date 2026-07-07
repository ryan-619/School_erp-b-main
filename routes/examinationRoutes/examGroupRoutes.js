import express from 'express';

import {
    getAllExamGroup,
    createExamGroup,
    updateExamGroup,
    deleteExamGroup
} from '../../controllers/examinationController/examGroupController.js';

const router = express.Router();

router.get('/', getAllExamGroup);

router.post('/', createExamGroup);

router.put('/:id', updateExamGroup);

router.delete('/:id', deleteExamGroup);

export default router;