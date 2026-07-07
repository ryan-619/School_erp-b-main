import express from 'express';

import {
getAllCopied,
createCopy,
deleteCopy
}
from '../../controllers/lessionController/copyOldLessonsController.js';

const router=express.Router();

router.get('/',getAllCopied);

router.post('/',createCopy);

router.delete('/:id',deleteCopy);

export default router;