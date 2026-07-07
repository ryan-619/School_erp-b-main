import express from 'express';

import {
    getAllFeesDiscount,
    createFeesDiscount,
    updateFeesDiscount,
    deleteFeesDiscount
} from '../../controllers/paymentController/feesDiscountController.js';

const router = express.Router();

router.get('/', getAllFeesDiscount);

router.post('/', createFeesDiscount);

router.put('/:id', updateFeesDiscount);

router.delete('/:id', deleteFeesDiscount);

export default router;