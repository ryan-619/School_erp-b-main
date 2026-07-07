import DailyAssignmentModel from '../../models/homeworkModels/dailyAssignmentModel.js';

export const getAllDailyAssignments = (req, res) => {
    DailyAssignmentModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getDailyAssignmentById = (req, res) => {
    DailyAssignmentModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createDailyAssignment = (req, res) => {
    DailyAssignmentModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Daily Assignment Added',
            result
        });
    });
};

export const updateDailyAssignment = (req, res) => {
    DailyAssignmentModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Daily Assignment Updated'
        });
    });
};

export const deleteDailyAssignment = (req, res) => {
    DailyAssignmentModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Daily Assignment Deleted'
        });
    });
};
