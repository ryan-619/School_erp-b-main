import SubjectGroupModel from '../../models/academicModels/subjectGroupModel.js';

export const getAllSubjectGroup = (req, res) => {

    SubjectGroupModel.getAll((err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

export const createSubjectGroup = (req, res) => {

    SubjectGroupModel.create(req.body, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Subject Group Added'
        });

    });

};

export const updateSubjectGroup = (req, res) => {

    SubjectGroupModel.update(
        req.params.id,
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: 'Subject Group Updated'
            });

        }
    );

};

export const deleteSubjectGroup = (req, res) => {

    SubjectGroupModel.delete(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Subject Group Deleted'
        });

    });

};