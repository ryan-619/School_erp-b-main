import express from 'express';

import {
    getAllItemStores,
    getItemStoreById,
    createItemStore,
    updateItemStore,
    deleteItemStore
} from '../../controllers/inventoryController/itemStoreController.js';

const router = express.Router();

router.get('/', getAllItemStores);

router.get('/:id', getItemStoreById);

router.post('/', createItemStore);

router.put('/:id', updateItemStore);

router.delete('/:id', deleteItemStore);

export default router;
