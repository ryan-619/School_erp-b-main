import express from 'express';

import {
    getAllAdmissionEnquiry,
    getAdmissionEnquiryById,
    createAdmissionEnquiry,
    updateAdmissionEnquiry,
    deleteAdmissionEnquiry
} from '../../controllers/officeController/admissionEnquiryController.js';

const router = express.Router();

router.get('/', getAllAdmissionEnquiry);

router.get('/:id', getAdmissionEnquiryById);

router.post('/', createAdmissionEnquiry);

router.put('/:id', updateAdmissionEnquiry);

router.delete('/:id', deleteAdmissionEnquiry);

export default router;