import express from 'express';

import {
    getAllItemStock,
    getItemStockById,
    createItemStock,
    updateItemStock,
    deleteItemStock
} from '../../controllers/inventoryController/itemStockController.js';

const router = express.Router();

router.get('/', getAllItemStock);

router.get('/:id', getItemStockById);

router.post('/', createItemStock);

router.put('/:id', updateItemStock);

router.delete('/:id', deleteItemStock);

export default router;
