import express from 'express';

import {
    getAllLeaves,
    getLeaveById,
    createLeave,
    updateLeave,
    deleteLeave
} from '../../controllers/attendanceController/approveLeaveController.js';

const router = express.Router();

router.get('/', getAllLeaves);

router.get('/:id', getLeaveById);

router.post('/', createLeave);

router.put('/:id', updateLeave);

router.delete('/:id', deleteLeave);

export default router;