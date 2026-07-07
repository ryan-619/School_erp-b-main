import express from 'express';

import {
    getAllContentShare,
    getContentShareById,
    createContentShare,
    updateContentShare,
    deleteContentShare
}
from '../../controllers/downloadController/contentShareListController.js';

const router = express.Router();


router.get(
    '/',
    getAllContentShare
);

router.get(
    '/:id',
    getContentShareById
);

router.post(
    '/',
    createContentShare
);

router.put(
    '/:id',
    updateContentShare
);

router.delete(
    '/:id',
    deleteContentShare
);

export default router;