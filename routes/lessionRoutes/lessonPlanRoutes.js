import express from 'express';

import{
getAllPlan,
createPlan,
updatePlan,
deletePlan
}
from '../../controllers/lessionController/lessonPlanController.js';

const router=express.Router();

router.get('/',getAllPlan);

router.post('/',createPlan);

router.put('/:id',updatePlan);

router.delete('/:id',deletePlan);

export default router;