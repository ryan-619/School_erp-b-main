import express from 'express';

import{

getAllContentType,
getContentTypeById,
createContentType,
updateContentType,
deleteContentType

}
from '../../controllers/downloadController/contentTypeController.js';

const router=express.Router();


router.get(
'/',
getAllContentType
);


router.get(
'/:id',
getContentTypeById
);


router.post(
'/',
createContentType
);


router.put(
'/:id',
updateContentType
);


router.delete(
'/:id',
deleteContentType
);

export default router;