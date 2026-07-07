import express from 'express';

import{
getAllLeaveType,
createLeaveType,
updateLeaveType,
deleteLeaveType
}
from '../../controllers/hrController/leaveTypeController.js';

const router=express.Router();

router.get('/',getAllLeaveType);

router.post('/',createLeaveType);

router.put('/:id',updateLeaveType);

router.delete('/:id',deleteLeaveType);

export default router;