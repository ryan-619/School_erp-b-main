import express from 'express';

import {
    getAllIncomeHead,
    getIncomeHeadById,
    createIncomeHead,
    updateIncomeHead,
    deleteIncomeHead
} from '../../controllers/incomeController/incomeHeadController.js';

const router = express.Router();

router.get('/', getAllIncomeHead);

router.get('/:id', getIncomeHeadById);

router.post('/', createIncomeHead);

router.put('/:id', updateIncomeHead);

router.delete('/:id', deleteIncomeHead);

export default router;