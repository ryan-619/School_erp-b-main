import express from 'express';

import {
    searchExpense,
    searchExpenseByDate
} from '../../controllers/expensesController/searchExpenseController.js';

const router = express.Router();

router.post('/', searchExpense);

router.post('/date-wise', searchExpenseByDate);

export default router;