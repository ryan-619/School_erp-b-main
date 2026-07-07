import express from 'express';

import {
    searchIncome,
    searchIncomeByDate
} from '../../controllers/incomeController/searchIncomeController.js';

const router = express.Router();

router.post('/', searchIncome);

router.post('/date-wise', searchIncomeByDate);

export default router;