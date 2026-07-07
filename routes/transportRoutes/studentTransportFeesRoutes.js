import express from 'express';

import {
    getAllStudentTransportFees,
    getStudentTransportFeesById,
    createStudentTransportFees,
    updateStudentTransportFees,
    deleteStudentTransportFees
} from '../../controllers/transportController/studentTransportFeesController.js';

const router = express.Router();

router.get('/', getAllStudentTransportFees);

router.get('/:id', getStudentTransportFeesById);

router.post('/', createStudentTransportFees);

router.put('/:id', updateStudentTransportFees);

router.delete('/:id', deleteStudentTransportFees);

export default router;
