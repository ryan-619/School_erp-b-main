import express from 'express';

import {
    searchFeesPayment
} from '../../controllers/paymentController/searchFeesPaymentController.js';

const router = express.Router();

router.post('/', searchFeesPayment);

export default router;