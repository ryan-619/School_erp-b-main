import MultiClassStudent from '../../models/studentInformationmodels/multiClassStudentModel.js';

export const getAll = (req, res) => {
    MultiClassStudent.getAll((err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

export const create = (req, res) => {
    MultiClassStudent.create(req.body, (err, result) => {
        if (err) throw err;
        res.json({
            message: 'Assigned Successfully'
        });
    });
};

export const deleteRecord = (req, res) => {
    MultiClassStudent.delete(req.params.id, (err, result) => {
        if (err) throw err;
        res.json({
            message: 'Deleted'
        });
    });
};