import express from 'express';

import {
getAllDesignation,
getDesignationById,
createDesignation,
updateDesignation,
deleteDesignation
}
from '../../controllers/hrController/designationController.js';

const router=express.Router();

router.get('/',getAllDesignation);

router.get('/:id',getDesignationById);

router.post('/',createDesignation);

router.put('/:id',updateDesignation);

router.delete('/:id',deleteDesignation);

export default router;