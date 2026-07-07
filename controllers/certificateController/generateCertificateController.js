import GenerateCertificateModel from '../../models/certificateModels/generateCertificateModel.js';

export const getAllGenerateCertificates = (req, res) => {
    GenerateCertificateModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getGenerateCertificateById = (req, res) => {
    GenerateCertificateModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createGenerateCertificate = (req, res) => {
    GenerateCertificateModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Generate Certificate Added',
            result
        });
    });
};

export const updateGenerateCertificate = (req, res) => {
    GenerateCertificateModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Generate Certificate Updated'
        });
    });
};

export const deleteGenerateCertificate = (req, res) => {
    GenerateCertificateModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Generate Certificate Deleted'
        });
    });
};
