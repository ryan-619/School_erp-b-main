import express from 'express';

import{
getAllTopic,
createTopic,
updateTopic,
deleteTopic
}
from '../../controllers/lessionController/topicController.js';

const router=express.Router();

router.get('/',getAllTopic);

router.post('/',createTopic);

router.put('/:id',updateTopic);

router.delete('/:id',deleteTopic);

export default router;