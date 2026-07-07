import express from 'express';

import {
getAllTeachersRating,
getTeachersRatingById,
createTeachersRating,
updateTeachersRating,
deleteTeachersRating
}
from '../../controllers/hrController/teachersRatingController.js';

const router=express.Router();

router.get('/',getAllTeachersRating);

router.get('/:id',getTeachersRatingById);

router.post('/',createTeachersRating);

router.put('/:id',updateTeachersRating);

router.delete('/:id',deleteTeachersRating);

export default router;