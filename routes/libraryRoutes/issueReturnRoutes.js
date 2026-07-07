import express from 'express';

import {
    getAllIssueReturns,
    getIssueReturnById,
    createIssueReturn,
    updateIssueReturn,
    deleteIssueReturn
} from '../../controllers/libraryController/issueReturnController.js';

const router = express.Router();

router.get('/', getAllIssueReturns);

router.get('/:id', getIssueReturnById);

router.post('/', createIssueReturn);

router.put('/:id', updateIssueReturn);

router.delete('/:id', deleteIssueReturn);

export default router;
