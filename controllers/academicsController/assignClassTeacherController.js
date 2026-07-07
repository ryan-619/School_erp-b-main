import AssignClassTeacherModel from '../../models/academicModels/assignClassTeacherModel.js';

export const getAllAssignTeacher = (req, res) => {

    AssignClassTeacherModel.getAll((err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

export const createAssignTeacher = (req, res) => {

    AssignClassTeacherModel.create(req.body, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Teacher Assigned Successfully'
        });

    });

};

export const updateAssignTeacher = (req, res) => {

    AssignClassTeacherModel.update(
        req.params.id,
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: 'Assigned Teacher Updated'
            });

        }
    );

};

export const deleteAssignTeacher = (req, res) => {

    AssignClassTeacherModel.delete(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Assigned Teacher Deleted'
        });

    });

};