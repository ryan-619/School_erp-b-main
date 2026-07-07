import express from 'express';

import {
    getAllAssignTeacher,
    createAssignTeacher,
    updateAssignTeacher,
    deleteAssignTeacher
} from '../../controllers/academicsController/assignClassTeacherController.js';

const router = express.Router();

router.get('/', getAllAssignTeacher);

router.post('/', createAssignTeacher);

router.put('/:id', updateAssignTeacher);

router.delete('/:id', deleteAssignTeacher);

export default router;