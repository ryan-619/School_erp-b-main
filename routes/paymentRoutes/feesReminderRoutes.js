import express from 'express';

import {
    getAllReminder,
    createReminder,
    updateReminder,
    deleteReminder
} from '../../controllers/paymentController/feesReminderController.js';

const router = express.Router();

router.get('/', getAllReminder);

router.post('/', createReminder);

router.put('/:id', updateReminder);

router.delete('/:id', deleteReminder);

export default router;