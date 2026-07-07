import express from 'express';

import {
    getAllReceive,
    createReceive,
    updateReceive,
    deleteReceive
} from '../../controllers/officeController/postalReceiveController.js';

const router = express.Router();

router.get('/', getAllReceive);

router.post('/', createReceive);

router.put('/:id', updateReceive);

router.delete('/:id', deleteReceive);

export default router;