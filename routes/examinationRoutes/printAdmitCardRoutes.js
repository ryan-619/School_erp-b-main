import express from 'express';
import { printAdmitCard } from '../../controllers/examinationController/printAdmitCardController.js';

const router = express.Router();
router.get('/:studentId', printAdmitCard);

export default router;
