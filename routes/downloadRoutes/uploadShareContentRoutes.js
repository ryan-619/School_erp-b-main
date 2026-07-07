import express from 'express';

import upload
from '../../middleware/contentUpload.js';

import {

    getAllUploadContent,
    getUploadContentById,
    createUploadContent,
    deleteUploadContent

}
from '../../controllers/downloadController/uploadShareContentController.js';


const router = express.Router();


router.get(
    '/',
    getAllUploadContent
);


router.get(
    '/:id',
    getUploadContentById
);


router.post(
    '/',
    upload.single('file'),
    createUploadContent
);


router.delete(
    '/:id',
    deleteUploadContent
);


export default router;