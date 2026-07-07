import express from 'express';

import{
getAttendance,
createAttendance,
updateAttendance,
deleteAttendance
}
from '../../controllers/hrController/staffAttendanceController.js';

const router=express.Router();

router.get('/',getAttendance);

router.post('/',createAttendance);

router.put('/:id',updateAttendance);

router.delete('/:id',deleteAttendance);

export default router;