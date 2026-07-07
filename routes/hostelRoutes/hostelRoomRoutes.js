import express from 'express';

import {
    getAllHostelRooms,
    getHostelRoomById,
    createHostelRoom,
    updateHostelRoom,
    deleteHostelRoom
} from '../../controllers/hostelController/hostelRoomController.js';

const router = express.Router();

router.get('/', getAllHostelRooms);

router.get('/:id', getHostelRoomById);

router.post('/', createHostelRoom);

router.put('/:id', updateHostelRoom);

router.delete('/:id', deleteHostelRoom);

export default router;
