import express from 'express';
import { bulkDeleteStudents } from '../../controllers/studentInfromationController/bulkDeleteController.js';

const router = express.Router();

router.post('/students', bulkDeleteStudents);

export default router;