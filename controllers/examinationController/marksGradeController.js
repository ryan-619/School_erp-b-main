import MarksGradeModel from '../../models/examinationModels/marksGradeModel.js';

export const getAllMarksGrade = (req, res) => {

    MarksGradeModel.getAll((err, result) => {

        if (err) return res.status(500).json(err);

        res.json(result);

    });

};

export const createMarksGrade = (req, res) => {

    MarksGradeModel.create(req.body, (err, result) => {

        if (err) return res.status(500).json(err);

        res.json({
            message: 'Marks Grade Added'
        });

    });

};

export const updateMarksGrade = (req, res) => {

    MarksGradeModel.update(
        req.params.id,
        req.body,
        (err, result) => {

            if (err) return res.status(500).json(err);

            res.json({
                message: 'Marks Grade Updated'
            });

        }
    );

};

export const deleteMarksGrade = (req, res) => {

    MarksGradeModel.delete(req.params.id, (err, result) => {

        if (err) return res.status(500).json(err);

        res.json({
            message: 'Marks Grade Deleted'
        });

    });

};