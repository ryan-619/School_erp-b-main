import ExamResultModel from '../../models/examinationModels/examResultModel.js';

export const getAllExamResult = (req, res) => {

    ExamResultModel.getAll((err, result) => {

        if (err) return res.status(500).json(err);

        res.json(result);

    });

};

export const createExamResult = (req, res) => {

    ExamResultModel.create(req.body, (err, result) => {

        if (err) return res.status(500).json(err);

        res.json({
            message: 'Exam Result Added'
        });

    });

};

export const updateExamResult = (req, res) => {

    ExamResultModel.update(
        req.params.id,
        req.body,
        (err, result) => {

            if (err) return res.status(500).json(err);

            res.json({
                message: 'Exam Result Updated'
            });

        }
    );

};

export const deleteExamResult = (req, res) => {

    ExamResultModel.delete(req.params.id, (err, result) => {

        if (err) return res.status(500).json(err);

        res.json({
            message: 'Exam Result Deleted'
        });

    });

};