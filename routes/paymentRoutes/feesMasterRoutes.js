import express from 'express';

import {
    getAllFeesMaster,
    getFeesMasterById,
    createFeesMaster,
    updateFeesMaster,
    deleteFeesMaster
} from '../../controllers/paymentController/feesMasterController.js';

const router = express.Router();

router.get('/', getAllFeesMaster);

router.get('/:id', getFeesMasterById);

router.post('/', createFeesMaster);

router.put('/:id', updateFeesMaster);

router.delete('/:id', deleteFeesMaster);

export default router;