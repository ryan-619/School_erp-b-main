import express from 'express';

import {
    getAllGenerateCertificates,
    getGenerateCertificateById,
    createGenerateCertificate,
    updateGenerateCertificate,
    deleteGenerateCertificate
} from '../../controllers/certificateController/generateCertificateController.js';

const router = express.Router();

router.get('/', getAllGenerateCertificates);

router.get('/:id', getGenerateCertificateById);

router.post('/', createGenerateCertificate);

router.put('/:id', updateGenerateCertificate);

router.delete('/:id', deleteGenerateCertificate);

export default router;
