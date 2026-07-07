import express from 'express';

import{
getAllLesson,
createLesson,
updateLesson,
deleteLesson
}
from '../../controllers/lessionController/lessonController.js';

const router=express.Router();

router.get('/',getAllLesson);

router.post('/',createLesson);

router.put('/:id',updateLesson);

router.delete('/:id',deleteLesson);

export default router;