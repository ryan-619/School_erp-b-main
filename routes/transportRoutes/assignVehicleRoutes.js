import express from 'express';

import {
    getAllAssignVehicles,
    getAssignVehicleById,
    createAssignVehicle,
    updateAssignVehicle,
    deleteAssignVehicle
} from '../../controllers/transportController/assignVehicleController.js';

const router = express.Router();

router.get('/', getAllAssignVehicles);

router.get('/:id', getAssignVehicleById);

router.post('/', createAssignVehicle);

router.put('/:id', updateAssignVehicle);

router.delete('/:id', deleteAssignVehicle);

export default router;
