import express from 'express';

import {
    getAllSubjectGroup,
    createSubjectGroup,
    updateSubjectGroup,
    deleteSubjectGroup
} from '../../controllers/academicsController/subjectGroupController.js';

const router = express.Router();

router.get('/', getAllSubjectGroup);

router.post('/', createSubjectGroup);

router.put('/:id', updateSubjectGroup);

router.delete('/:id', deleteSubjectGroup);

export default router;