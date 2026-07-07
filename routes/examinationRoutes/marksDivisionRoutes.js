import express from 'express';

import {
    getAllMarksDivision,
    createMarksDivision,
    updateMarksDivision,
    deleteMarksDivision
} from '../../controllers/examinationController/marksDivisionController.js';

const router = express.Router();

router.get('/', getAllMarksDivision);

router.post('/', createMarksDivision);

router.put('/:id', updateMarksDivision);

router.delete('/:id', deleteMarksDivision);

export default router;