import express from 'express';

import {
    getAllPages,
    getPageById,
    createPage,
    updatePage,
    deletePage
} from '../../controllers/frontCmsController/pageController.js';

const router = express.Router();

router.get('/', getAllPages);

router.get('/:id', getPageById);

router.post('/', createPage);

router.put('/:id', updatePage);

router.delete('/:id', deletePage);

export default router;
