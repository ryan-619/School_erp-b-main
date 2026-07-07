import express from 'express';

import {
    getAllComplaint,
    createComplaint,
    updateComplaint,
    deleteComplaint
} from '../../controllers/officeController/complaintController.js';

const router = express.Router();

router.get('/', getAllComplaint);

router.post('/', createComplaint);

router.put('/:id', updateComplaint);

router.delete('/:id', deleteComplaint);

export default router;