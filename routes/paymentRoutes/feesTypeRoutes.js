import express from 'express';

import {
    getAllFeesType,
    createFeesType,
    updateFeesType,
    deleteFeesType
} from '../../controllers/paymentController/feesTypeController.js';

const router = express.Router();

router.get('/', getAllFeesType);

router.post('/', createFeesType);

router.put('/:id', updateFeesType);

router.delete('/:id', deleteFeesType);

export default router;
