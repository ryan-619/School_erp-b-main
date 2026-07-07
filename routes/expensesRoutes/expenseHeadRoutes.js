import express from 'express';

import {
    getAllExpenseHead,
    getExpenseHeadById,
    createExpenseHead,
    updateExpenseHead,
    deleteExpenseHead
} from '../../controllers/expensesController/expenseHeadController.js';

const router = express.Router();

router.get('/', getAllExpenseHead);

router.get('/:id', getExpenseHeadById);

router.post('/', createExpenseHead);

router.put('/:id', updateExpenseHead);

router.delete('/:id', deleteExpenseHead);

export default router;