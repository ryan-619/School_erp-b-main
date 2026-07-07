import ExamScheduleModel from '../../models/examinationModels/examScheduleModel.js';

export const getAllExamSchedule = (req, res) => {

    ExamScheduleModel.getAll((err, result) => {

        if (err) return res.status(500).json(err);

        res.json(result);

    });

};

export const createExamSchedule = (req, res) => {

    ExamScheduleModel.create(req.body, (err, result) => {

        if (err) return res.status(500).json(err);

        res.json({
            message: 'Exam Schedule Added'
        });

    });

};

export const updateExamSchedule = (req, res) => {

    ExamScheduleModel.update(
        req.params.id,
        req.body,
        (err, result) => {

            if (err) return res.status(500).json(err);

            res.json({
                message: 'Exam Schedule Updated'
            });

        }
    );

};

export const deleteExamSchedule = (req, res) => {

    ExamScheduleModel.delete(req.params.id, (err, result) => {

        if (err) return res.status(500).json(err);

        res.json({
            message: 'Exam Schedule Deleted'
        });

    });

};