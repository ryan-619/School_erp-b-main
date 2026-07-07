import express from 'express';

import {
    getAllAdmitCard,
    createAdmitCard,
    updateAdmitCard,
    deleteAdmitCard
} from '../../controllers/examinationController/designAdmitCardController.js';

const router = express.Router();

router.get('/', getAllAdmitCard);

router.post('/', createAdmitCard);

router.put('/:id', updateAdmitCard);

router.delete('/:id', deleteAdmitCard);

export default router;