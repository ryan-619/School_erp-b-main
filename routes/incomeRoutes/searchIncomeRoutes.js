import express from 'express';
import { searchIncome, searchIncomeDateWise } from '../../controllers/incomeController/searchIncomeController.js';

const router = express.Router();
router.post('/',          searchIncome);
router.post('/date-wise', searchIncomeDateWise);

export default router;
