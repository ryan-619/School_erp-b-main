import express from 'express';

import {
    getAllPickupPoints,
    getPickupPointById,
    createPickupPoint,
    updatePickupPoint,
    deletePickupPoint
} from '../../controllers/transportController/pickupPointController.js';

const router = express.Router();

router.get('/', getAllPickupPoints);

router.get('/:id', getPickupPointById);

router.post('/', createPickupPoint);

router.put('/:id', updatePickupPoint);

router.delete('/:id', deletePickupPoint);

export default router;
