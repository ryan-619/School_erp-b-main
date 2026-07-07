import ManageAlumniModel from '../../models/alumniModels/manageAlumniModel.js';

export const getAllManageAlumni = (req, res) => {
    ManageAlumniModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getManageAlumniById = (req, res) => {
    ManageAlumniModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createManageAlumni = (req, res) => {
    ManageAlumniModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Alumni Added',
            result
        });
    });
};

export const updateManageAlumni = (req, res) => {
    ManageAlumniModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Alumni Updated'
        });
    });
};

export const deleteManageAlumni = (req, res) => {
    ManageAlumniModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Alumni Deleted'
        });
    });
};
