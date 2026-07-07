import express from 'express';

import {
    getAllTransportFeesMaster,
    getTransportFeesMasterById,
    createTransportFeesMaster,
    updateTransportFeesMaster,
    deleteTransportFeesMaster
} from '../../controllers/transportController/transportFeesMasterController.js';

const router = express.Router();

router.get('/', getAllTransportFeesMaster);

router.get('/:id', getTransportFeesMasterById);

router.post('/', createTransportFeesMaster);

router.put('/:id', updateTransportFeesMaster);

router.delete('/:id', deleteTransportFeesMaster);

export default router;
