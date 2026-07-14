import express from 'express';
import { searchDueFees } from '../../controllers/paymentController/searchDueFeesController.js';

const router = express.Router();
router.get('/', searchDueFees);

export default router;
