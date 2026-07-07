import express from 'express';

import {
    getStudentAdmitCard
} from '../../controllers/examinationController/printAdmitCardController.js';

const router = express.Router();

router.get('/:studentId', getStudentAdmitCard);

export default router;