import express from 'express';

import {
    getAllHostels,
    getHostelById,
    createHostel,
    updateHostel,
    deleteHostel
} from '../../controllers/hostelController/hostelController.js';

const router = express.Router();

router.get('/', getAllHostels);

router.get('/:id', getHostelById);

router.post('/', createHostel);

router.put('/:id', updateHostel);

router.delete('/:id', deleteHostel);

export default router;
