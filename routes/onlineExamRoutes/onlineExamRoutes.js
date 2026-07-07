import express from 'express';

import {

getAllOnlineExam,
getOnlineExamById,
createOnlineExam,
updateOnlineExam,
deleteOnlineExam

} from '../../controllers/onlineExamController/onlineExamController.js';


const router=express.Router();

router.get(
    '/',
    getAllOnlineExam
);

router.get(
    '/:id',
    getOnlineExamById
);

router.post(
    '/',
    createOnlineExam
);

router.put(
    '/:id',
    updateOnlineExam
);

router.delete(
    '/:id',
    deleteOnlineExam
);

export default router;