import express from 'express';

import {
    getAllDueFees
} from '../../controllers/paymentController/searchDueFeesController.js';

const router = express.Router();

router.get('/', getAllDueFees);

export default router;