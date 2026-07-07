import express from 'express';

import {
    getAllCollectFees,
    getCollectFeesById,
    createCollectFees,
    updateCollectFees,
    deleteCollectFees
} from '../../controllers/paymentController/collectFeesController.js';

const router = express.Router();

router.get('/', getAllCollectFees);

router.get('/:id', getCollectFeesById);

router.post('/', createCollectFees);

router.put('/:id', updateCollectFees);

router.delete('/:id', deleteCollectFees);

export default router;