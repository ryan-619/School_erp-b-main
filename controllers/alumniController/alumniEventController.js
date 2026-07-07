import AlumniEventModel from '../../models/alumniModels/alumniEventModel.js';

export const getAllAlumniEvents = (req, res) => {
    AlumniEventModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getAlumniEventById = (req, res) => {
    AlumniEventModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createAlumniEvent = (req, res) => {
    AlumniEventModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Alumni Event Added',
            result
        });
    });
};

export const updateAlumniEvent = (req, res) => {
    AlumniEventModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Alumni Event Updated'
        });
    });
};

export const deleteAlumniEvent = (req, res) => {
    AlumniEventModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Alumni Event Deleted'
        });
    });
};
