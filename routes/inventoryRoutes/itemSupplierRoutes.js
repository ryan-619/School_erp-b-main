import express from 'express';

import {
    getAllItemSuppliers,
    getItemSupplierById,
    createItemSupplier,
    updateItemSupplier,
    deleteItemSupplier
} from '../../controllers/inventoryController/itemSupplierController.js';

const router = express.Router();

router.get('/', getAllItemSuppliers);

router.get('/:id', getItemSupplierById);

router.post('/', createItemSupplier);

router.put('/:id', updateItemSupplier);

router.delete('/:id', deleteItemSupplier);

export default router;
