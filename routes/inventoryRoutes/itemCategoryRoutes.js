import express from 'express';

import {
    getAllItemCategories,
    getItemCategoryById,
    createItemCategory,
    updateItemCategory,
    deleteItemCategory
} from '../../controllers/inventoryController/itemCategoryController.js';

const router = express.Router();

router.get('/', getAllItemCategories);

router.get('/:id', getItemCategoryById);

router.post('/', createItemCategory);

router.put('/:id', updateItemCategory);

router.delete('/:id', deleteItemCategory);

export default router;
