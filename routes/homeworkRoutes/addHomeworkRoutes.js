import express from 'express';

import {
    getAllHomework,
    getHomeworkById,
    createHomework,
    updateHomework,
    deleteHomework
} from '../../controllers/homeworkController/addHomeworkController.js';

const router = express.Router();

router.get('/', getAllHomework);

router.get('/:id', getHomeworkById);

router.post('/', createHomework);

router.put('/:id', updateHomework);

router.delete('/:id', deleteHomework);

export default router;
