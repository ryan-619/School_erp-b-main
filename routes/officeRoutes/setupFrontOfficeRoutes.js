import express from 'express';

import {
    getAllSetup,
    createSetup,
    updateSetup,
    deleteSetup
} from '../../controllers/officeController/setupFrontOfficeController.js';

const router = express.Router();

router.get('/', getAllSetup);

router.post('/', createSetup);

router.put('/:id', updateSetup);

router.delete('/:id', deleteSetup);

export default router;