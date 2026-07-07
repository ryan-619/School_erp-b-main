import express from 'express';

import {
    getAllStudentCertificates,
    getStudentCertificateById,
    createStudentCertificate,
    updateStudentCertificate,
    deleteStudentCertificate
} from '../../controllers/certificateController/studentCertificateController.js';

const router = express.Router();

router.get('/', getAllStudentCertificates);

router.get('/:id', getStudentCertificateById);

router.post('/', createStudentCertificate);

router.put('/:id', updateStudentCertificate);

router.delete('/:id', deleteStudentCertificate);

export default router;
