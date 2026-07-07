import express from 'express';

import {
    getAllVisitors,
    createVisitor,
    updateVisitor,
    deleteVisitor
} from '../../controllers/officeController/visitorBookController.js';

const router = express.Router();

router.get('/', getAllVisitors);

router.post('/', createVisitor);

router.put('/:id', updateVisitor);

router.delete('/:id', deleteVisitor);

export default router;