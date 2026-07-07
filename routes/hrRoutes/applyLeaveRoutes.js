import express from 'express';

import{
getAllApplyLeave,
createApplyLeave,
deleteApplyLeave
}
from '../../controllers/hrController/applyLeaveController.js';

const router=express.Router();

router.get('/',getAllApplyLeave);

router.post('/',createApplyLeave);

router.delete('/:id',deleteApplyLeave);

export default router;