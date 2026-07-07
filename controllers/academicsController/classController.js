import ClassModel from '../../models/academicModels/classModel.js';

export const getAllClasses = (req, res) => {

    ClassModel.getAll((err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

export const createClass = (req, res) => {

    ClassModel.create(req.body, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Class Added'
        });

    });

};

export const updateClass = (req, res) => {

    ClassModel.update(
        req.params.id,
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: 'Class Updated'
            });

        }
    );

};

export const deleteClass = (req, res) => {

    ClassModel.delete(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Class Deleted'
        });

    });

};