import express from 'express';

import {
    getAllTransportRoutes,
    getTransportRouteById,
    createTransportRoute,
    updateTransportRoute,
    deleteTransportRoute
} from '../../controllers/transportController/transportRouteController.js';

const router = express.Router();

router.get('/', getAllTransportRoutes);

router.get('/:id', getTransportRouteById);

router.post('/', createTransportRoute);

router.put('/:id', updateTransportRoute);

router.delete('/:id', deleteTransportRoute);

export default router;
