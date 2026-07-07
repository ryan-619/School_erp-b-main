import StudentIdCardModel from '../../models/certificateModels/studentIdCardModel.js';

export const getAllStudentIdCards = (req, res) => {
    StudentIdCardModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getStudentIdCardById = (req, res) => {
    StudentIdCardModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createStudentIdCard = (req, res) => {
    StudentIdCardModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Student ID Card Added',
            result
        });
    });
};

export const updateStudentIdCard = (req, res) => {
    StudentIdCardModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Student ID Card Updated'
        });
    });
};

export const deleteStudentIdCard = (req, res) => {
    StudentIdCardModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Student ID Card Deleted'
        });
    });
};
