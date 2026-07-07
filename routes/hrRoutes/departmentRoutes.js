import express from 'express';

import {
getAllDepartment,
getDepartmentById,
createDepartment,
updateDepartment,
deleteDepartment
}
from '../../controllers/hrController/departmentController.js';

const router=express.Router();

router.get('/',getAllDepartment);

router.get('/:id',getDepartmentById);

router.post('/',createDepartment);

router.put('/:id',updateDepartment);

router.delete('/:id',deleteDepartment);

export default router;