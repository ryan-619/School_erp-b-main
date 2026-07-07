import express from 'express';

import {
    getAllMarksGrade,
    createMarksGrade,
    updateMarksGrade,
    deleteMarksGrade
} from '../../controllers/examinationController/marksGradeController.js';

const router = express.Router();

router.get('/', getAllMarksGrade);

router.post('/', createMarksGrade);

router.put('/:id', updateMarksGrade);

router.delete('/:id', deleteMarksGrade);

export default router;