import SubjectsModel from '../../models/academicModels/subjectsModel.js';

export const getAllSubjects = (req, res) => {

    SubjectsModel.getAll((err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

export const createSubject = (req, res) => {

    SubjectsModel.create(req.body, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Subject Added'
        });

    });

};

export const updateSubject = (req, res) => {

    SubjectsModel.update(
        req.params.id,
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: 'Subject Updated'
            });

        }
    );

};

export const deleteSubject = (req, res) => {

    SubjectsModel.delete(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Subject Deleted'
        });

    });

};