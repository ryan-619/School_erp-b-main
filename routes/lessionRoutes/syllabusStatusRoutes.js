import express from 'express';

import{
getAllStatus,
createStatus,
updateStatus,
deleteStatus
}
from '../../controllers/lessionController/syllabusStatusController.js';

const router=express.Router();

router.get('/',getAllStatus);

router.post('/',createStatus);

router.put('/:id',updateStatus);

router.delete('/:id',deleteStatus);

export default router;