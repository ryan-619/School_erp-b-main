import express from 'express';
import { searchExpense, searchExpenseDateWise } from '../../controllers/expensesController/searchExpenseController.js';

const router = express.Router();
router.post('/',           searchExpense);
router.post('/date-wise',  searchExpenseDateWise);

export default router;
