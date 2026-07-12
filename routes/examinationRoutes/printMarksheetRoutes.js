import express from 'express';
import { printMarksheet } from '../../controllers/examinationController/printMarksheetController.js';

const router = express.Router();
router.get('/:studentId', printMarksheet);

export default router;
