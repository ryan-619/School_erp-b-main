import express from 'express';

import {
    getTeacherTimetable
} from '../../controllers/academicsController/teachersTimetableController.js';

const router = express.Router();

router.get('/:teacherId', getTeacherTimetable);

export default router;