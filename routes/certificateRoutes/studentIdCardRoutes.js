import express from 'express';

import {
    getAllStudentIdCards,
    getStudentIdCardById,
    createStudentIdCard,
    updateStudentIdCard,
    deleteStudentIdCard
} from '../../controllers/certificateController/studentIdCardController.js';

const router = express.Router();

router.get('/', getAllStudentIdCards);

router.get('/:id', getStudentIdCardById);

router.post('/', createStudentIdCard);

router.put('/:id', updateStudentIdCard);

router.delete('/:id', deleteStudentIdCard);

export default router;
