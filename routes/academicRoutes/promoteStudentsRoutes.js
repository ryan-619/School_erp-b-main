import express from 'express';

import {
    getAllPromotedStudents,
    createPromotedStudent,
    deletePromotedStudent
} from '../../controllers/academicsController/promoteStudentsController.js';

const router = express.Router();

router.get('/', getAllPromotedStudents);

router.post('/', createPromotedStudent);

router.delete('/:id', deletePromotedStudent);

export default router;