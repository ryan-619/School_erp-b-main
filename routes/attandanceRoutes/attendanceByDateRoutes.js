import express from 'express';
import { getAttendanceByDate } from '../../controllers/attendanceController/attendanceByDateController.js';

const router = express.Router();
router.post('/', getAttendanceByDate);

export default router;
