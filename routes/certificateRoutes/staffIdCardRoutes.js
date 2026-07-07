import express from 'express';

import {
    getAllStaffIdCards,
    getStaffIdCardById,
    createStaffIdCard,
    updateStaffIdCard,
    deleteStaffIdCard
} from '../../controllers/certificateController/staffIdCardController.js';

const router = express.Router();

router.get('/', getAllStaffIdCards);

router.get('/:id', getStaffIdCardById);

router.post('/', createStaffIdCard);

router.put('/:id', updateStaffIdCard);

router.delete('/:id', deleteStaffIdCard);

export default router;
