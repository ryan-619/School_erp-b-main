import express from 'express';

import {
    getAllTimetable,
    getTimetableById,
    createTimetable,
    updateTimetable,
    deleteTimetable
} from '../../controllers/academicsController/classTimetableController.js';

const router = express.Router();

router.get('/', getAllTimetable);

router.get('/:id', getTimetableById);

router.post('/', createTimetable);

router.put('/:id', updateTimetable);

router.delete('/:id', deleteTimetable);

export default router;