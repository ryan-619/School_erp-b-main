import express from 'express';
import { bulkDelete } from '../../controllers/studentInfromationController/bulkDeleteController.js';

const router = express.Router();
router.post('/students', bulkDelete);

export default router;
