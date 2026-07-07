import AdmissionEnquiryModel from '../../models/officeModels/admissionEnquiryModel.js';

export const getAllAdmissionEnquiry = (req, res) => {

    AdmissionEnquiryModel.getAll((err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

export const getAdmissionEnquiryById = (req, res) => {

    AdmissionEnquiryModel.getById(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

export const createAdmissionEnquiry = (req, res) => {

    AdmissionEnquiryModel.create(req.body, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Admission Enquiry Added',
            result
        });

    });

};

export const updateAdmissionEnquiry = (req, res) => {

    AdmissionEnquiryModel.update(
        req.params.id,
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: 'Admission Enquiry Updated'
            });

        }
    );

};

export const deleteAdmissionEnquiry = (req, res) => {

    AdmissionEnquiryModel.delete(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Admission Enquiry Deleted'
        });

    });

};