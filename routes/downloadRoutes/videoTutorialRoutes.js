import express from 'express';

import {

getAllVideo,
getVideoById,
createVideo,
updateVideo,
deleteVideo

}
from '../../controllers/downloadController/videoTutorialController.js';


const router=express.Router();

router.get(
'/',
getAllVideo
);

router.get(
'/:id',
getVideoById
);

router.post(
'/',
createVideo
);

router.put(
'/:id',
updateVideo
);

router.delete(
'/:id',
deleteVideo
);

export default router;