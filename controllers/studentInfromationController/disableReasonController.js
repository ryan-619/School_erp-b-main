import DisableReason from '../../models/studentInformationmodels/disableReasonModel.js';

export const getAll = (req, res) => {
    DisableReason.getAll((err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

export const create = (req, res) => {
    DisableReason.create(req.body, (err, result) => {
        if (err) throw err;
        res.json({
            message: 'Reason Added'
        });
    });
};

export const deleteRecord = (req, res) => {
    DisableReason.delete(req.params.id, (err, result) => {
        if (err) throw err;
        res.json({
            message: 'Reason Deleted'
        });
    });
};