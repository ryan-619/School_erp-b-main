import express from 'express';

import {
    getStudentMarksheet
} from '../../controllers/examinationController/printMarksheetController.js';

const router = express.Router();

router.get('/:studentId', getStudentMarksheet);

export default router;