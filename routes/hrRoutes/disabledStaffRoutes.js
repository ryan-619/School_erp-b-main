import express from 'express';

import {
getAllDisabledStaff,
getDisabledStaffById,
createDisabledStaff,
deleteDisabledStaff
}
from '../../controllers/hrController/disabledStaffController.js';

const router=express.Router();

router.get('/',getAllDisabledStaff);

router.get('/:id',getDisabledStaffById);

router.post('/',createDisabledStaff);

router.delete('/:id',deleteDisabledStaff);

export default router;