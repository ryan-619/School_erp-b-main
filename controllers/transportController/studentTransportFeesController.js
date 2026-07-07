import StudentTransportFeesModel from '../../models/transportModels/studentTransportFeesModel.js';

export const getAllStudentTransportFees = (req, res) => {
    StudentTransportFeesModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getStudentTransportFeesById = (req, res) => {
    StudentTransportFeesModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createStudentTransportFees = (req, res) => {
    StudentTransportFeesModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Student Transport Fees Added',
            result
        });
    });
};

export const updateStudentTransportFees = (req, res) => {
    StudentTransportFeesModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Student Transport Fees Updated'
        });
    });
};

export const deleteStudentTransportFees = (req, res) => {
    StudentTransportFeesModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Student Transport Fees Deleted'
        });
    });
};
