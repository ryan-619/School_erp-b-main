import express from 'express';

import {
    getAllFeesGroup,
    createFeesGroup,
    updateFeesGroup,
    deleteFeesGroup
} from '../../controllers/paymentController/feesGroupController.js';

const router = express.Router();

router.get('/', getAllFeesGroup);

router.post('/', createFeesGroup);

router.put('/:id', updateFeesGroup);

router.delete('/:id', deleteFeesGroup);

export default router;