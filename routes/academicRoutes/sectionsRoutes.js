import express from 'express';

import {
    getAllSections,
    createSection,
    updateSection,
    deleteSection
} from '../../controllers/academicsController/sectionsController.js';

const router = express.Router();

router.get('/', getAllSections);

router.post('/', createSection);

router.put('/:id', updateSection);

router.delete('/:id', deleteSection);

export default router;