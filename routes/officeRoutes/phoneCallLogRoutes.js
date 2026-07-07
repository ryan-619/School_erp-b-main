import express from 'express';

import {
    getAllCallLogs,
    createCallLog,
    updateCallLog,
    deleteCallLog
} from '../../controllers/officeController/phoneCallLogController.js';

const router = express.Router();

router.get('/', getAllCallLogs);

router.post('/', createCallLog);

router.put('/:id', updateCallLog);

router.delete('/:id', deleteCallLog);

export default router;