import express from 'express';

import {
    getAllMarksheetDesign,
    createMarksheetDesign,
    updateMarksheetDesign,
    deleteMarksheetDesign
} from '../../controllers/examinationController/designMarksheetController.js';

const router = express.Router();

router.get('/', getAllMarksheetDesign);

router.post('/', createMarksheetDesign);

router.put('/:id', updateMarksheetDesign);

router.delete('/:id', deleteMarksheetDesign);

export default router;