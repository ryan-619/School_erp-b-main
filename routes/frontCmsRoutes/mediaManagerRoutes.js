import express from 'express';

import {
    getAllMediaManagers,
    getMediaManagerById,
    createMediaManager,
    updateMediaManager,
    deleteMediaManager
} from '../../controllers/frontCmsController/mediaManagerController.js';

const router = express.Router();

router.get('/', getAllMediaManagers);

router.get('/:id', getMediaManagerById);

router.post('/', createMediaManager);

router.put('/:id', updateMediaManager);

router.delete('/:id', deleteMediaManager);

export default router;
