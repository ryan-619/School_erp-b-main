import express from 'express';

import {
    getAllIncome,
    getIncomeById,
    createIncome,
    updateIncome,
    deleteIncome
} from '../../controllers/incomeController/addIncomeController.js';

const router = express.Router();

router.get('/', getAllIncome);

router.get('/:id', getIncomeById);

router.post('/', createIncome);

router.put('/:id', updateIncome);

router.delete('/:id', deleteIncome);

export default router;