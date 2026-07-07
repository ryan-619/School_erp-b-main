import StudentCertificateModel from '../../models/certificateModels/studentCertificateModel.js';

export const getAllStudentCertificates = (req, res) => {
    StudentCertificateModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getStudentCertificateById = (req, res) => {
    StudentCertificateModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createStudentCertificate = (req, res) => {
    StudentCertificateModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Student Certificate Added',
            result
        });
    });
};

export const updateStudentCertificate = (req, res) => {
    StudentCertificateModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Student Certificate Updated'
        });
    });
};

export const deleteStudentCertificate = (req, res) => {
    StudentCertificateModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Student Certificate Deleted'
        });
    });
};
