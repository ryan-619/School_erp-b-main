import express from 'express';

import {
    getAllRoutePickupPoints,
    getRoutePickupPointById,
    createRoutePickupPoint,
    updateRoutePickupPoint,
    deleteRoutePickupPoint
} from '../../controllers/transportController/routePickupPointController.js';

const router = express.Router();

router.get('/', getAllRoutePickupPoints);

router.get('/:id', getRoutePickupPointById);

router.post('/', createRoutePickupPoint);

router.put('/:id', updateRoutePickupPoint);

router.delete('/:id', deleteRoutePickupPoint);

export default router;
