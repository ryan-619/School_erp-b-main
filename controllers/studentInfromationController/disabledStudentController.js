import DisabledStudent from '../../models/studentInformationmodels/disabledStudentModel.js';

export const getAll = (req, res) => {
    DisabledStudent.getAll((err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

export const create = (req, res) => {
    DisabledStudent.create(req.body, (err, result) => {
        if (err) throw err;
        res.json({
            message: 'Student Disabled'
        });
    });
};

export const deleteRecord = (req, res) => {
    DisabledStudent.delete(req.params.id, (err, result) => {
        if (err) throw err;
        res.json({
            message: 'Deleted'
        });
    });
};