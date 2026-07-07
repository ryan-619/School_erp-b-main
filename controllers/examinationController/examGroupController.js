import ExamGroupModel from '../../models/examinationModels/examGroupModel.js';

export const getAllExamGroup = (req, res) => {

    ExamGroupModel.getAll((err, result) => {

        if (err) return res.status(500).json(err);

        res.json(result);

    });

};

export const createExamGroup = (req, res) => {

    ExamGroupModel.create(req.body, (err, result) => {

        if (err) return res.status(500).json(err);

        res.json({
            message: 'Exam Group Added'
        });

    });

};

export const updateExamGroup = (req, res) => {

    ExamGroupModel.update(
        req.params.id,
        req.body,
        (err, result) => {

            if (err) return res.status(500).json(err);

            res.json({
                message: 'Exam Group Updated'
            });

        }
    );

};

export const deleteExamGroup = (req, res) => {

    ExamGroupModel.delete(req.params.id, (err, result) => {

        if (err) return res.status(500).json(err);

        res.json({
            message: 'Exam Group Deleted'
        });

    });

};