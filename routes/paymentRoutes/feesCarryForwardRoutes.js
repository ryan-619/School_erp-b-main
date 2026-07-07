import express from 'express';

import {
    getAllCarryForward,
    createCarryForward,
    deleteCarryForward
} from '../../controllers/paymentController/feesCarryForwardController.js';

const router = express.Router();

router.get('/', getAllCarryForward);

router.post('/', createCarryForward);

router.delete('/:id', deleteCarryForward);

export default router;