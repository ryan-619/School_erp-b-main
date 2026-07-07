import PromoteStudentsModel from '../../models/academicModels/promoteStudentsModel.js';

export const getAllPromotedStudents = (req, res) => {

    PromoteStudentsModel.getAll((err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

export const createPromotedStudent = (req, res) => {

    PromoteStudentsModel.create(req.body, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Student Promoted Successfully'
        });

    });

};

export const deletePromotedStudent = (req, res) => {

    PromoteStudentsModel.delete(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Promoted Record Deleted'
        });

    });

};