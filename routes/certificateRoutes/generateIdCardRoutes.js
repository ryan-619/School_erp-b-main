import express from 'express';

import {
    getAllGenerateIdCards,
    getGenerateIdCardById,
    createGenerateIdCard,
    updateGenerateIdCard,
    deleteGenerateIdCard
} from '../../controllers/certificateController/generateIdCardController.js';

const router = express.Router();

router.get('/', getAllGenerateIdCards);

router.get('/:id', getGenerateIdCardById);

router.post('/', createGenerateIdCard);

router.put('/:id', updateGenerateIdCard);

router.delete('/:id', deleteGenerateIdCard);

export default router;
