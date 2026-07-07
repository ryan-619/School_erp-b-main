import express from 'express';

import {
    getAllIssueItems,
    getIssueItemById,
    createIssueItem,
    updateIssueItem,
    deleteIssueItem
} from '../../controllers/inventoryController/issueItemController.js';

const router = express.Router();

router.get('/', getAllIssueItems);

router.get('/:id', getIssueItemById);

router.post('/', createIssueItem);

router.put('/:id', updateIssueItem);

router.delete('/:id', deleteIssueItem);

export default router;
