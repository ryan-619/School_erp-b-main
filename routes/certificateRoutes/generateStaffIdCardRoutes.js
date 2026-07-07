import express from 'express';

import {
    getAllGenerateStaffIdCards,
    getGenerateStaffIdCardById,
    createGenerateStaffIdCard,
    updateGenerateStaffIdCard,
    deleteGenerateStaffIdCard
} from '../../controllers/certificateController/generateStaffIdCardController.js';

const router = express.Router();

router.get('/', getAllGenerateStaffIdCards);

router.get('/:id', getGenerateStaffIdCardById);

router.post('/', createGenerateStaffIdCard);

router.put('/:id', updateGenerateStaffIdCard);

router.delete('/:id', deleteGenerateStaffIdCard);

export default router;
