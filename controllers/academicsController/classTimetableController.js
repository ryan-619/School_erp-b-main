import ClassTimetableModel from '../../models/academicModels/classTimetableModel.js';

export const getAllTimetable = (req, res) => {

    ClassTimetableModel.getAll((err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

export const getTimetableById = (req, res) => {

    ClassTimetableModel.getById(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

export const createTimetable = (req, res) => {

    ClassTimetableModel.create(req.body, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Class Timetable Added',
            result
        });

    });

};

export const updateTimetable = (req, res) => {

    ClassTimetableModel.update(
        req.params.id,
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: 'Class Timetable Updated'
            });

        }
    );

};

export const deleteTimetable = (req, res) => {

    ClassTimetableModel.delete(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Class Timetable Deleted'
        });

    });

};