import AddHomeworkModel from '../../models/homeworkModels/addHomeworkModel.js';

export const getAllHomework = (req, res) => {
    AddHomeworkModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getHomeworkById = (req, res) => {
    AddHomeworkModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createHomework = (req, res) => {
    AddHomeworkModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Homework Added',
            result
        });
    });
};

export const updateHomework = (req, res) => {
    AddHomeworkModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Homework Updated'
        });
    });
};

export const deleteHomework = (req, res) => {
    AddHomeworkModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Homework Deleted'
        });
    });
};
