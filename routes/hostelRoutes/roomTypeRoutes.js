import express from 'express';

import {
    getAllRoomTypes,
    getRoomTypeById,
    createRoomType,
    updateRoomType,
    deleteRoomType
} from '../../controllers/hostelController/roomTypeController.js';

const router = express.Router();

router.get('/', getAllRoomTypes);

router.get('/:id', getRoomTypeById);

router.post('/', createRoomType);

router.put('/:id', updateRoomType);

router.delete('/:id', deleteRoomType);

export default router;
