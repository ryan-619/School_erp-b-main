import express from 'express';

import {
    getAllOfflinePayments,
    createOfflinePayment,
    updateOfflinePayment,
    deleteOfflinePayment
} from '../../controllers/paymentController/offlineBankPaymentController.js';

const router = express.Router();

router.get('/', getAllOfflinePayments);

router.post('/', createOfflinePayment);

router.put('/:id', updateOfflinePayment);

router.delete('/:id', deleteOfflinePayment);

export default router;