import express from 'express';

import {
    getAllManageAlumni,
    getManageAlumniById,
    createManageAlumni,
    updateManageAlumni,
    deleteManageAlumni
} from '../../controllers/alumniController/manageAlumniController.js';

const router = express.Router();

router.get('/', getAllManageAlumni);

router.get('/:id', getManageAlumniById);

router.post('/', createManageAlumni);

router.put('/:id', updateManageAlumni);

router.delete('/:id', deleteManageAlumni);

export default router;
