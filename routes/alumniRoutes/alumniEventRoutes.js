import express from 'express';

import {
    getAllAlumniEvents,
    getAlumniEventById,
    createAlumniEvent,
    updateAlumniEvent,
    deleteAlumniEvent
} from '../../controllers/alumniController/alumniEventController.js';

const router = express.Router();

router.get('/', getAllAlumniEvents);

router.get('/:id', getAlumniEventById);

router.post('/', createAlumniEvent);

router.put('/:id', updateAlumniEvent);

router.delete('/:id', deleteAlumniEvent);

export default router;
