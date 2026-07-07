import MediaManagerModel from '../../models/frontCmsModels/mediaManagerModel.js';

export const getAllMediaManagers = (req, res) => {
    MediaManagerModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getMediaManagerById = (req, res) => {
    MediaManagerModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createMediaManager = (req, res) => {
    MediaManagerModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Media Manager Added',
            result
        });
    });
};

export const updateMediaManager = (req, res) => {
    MediaManagerModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Media Manager Updated'
        });
    });
};

export const deleteMediaManager = (req, res) => {
    MediaManagerModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Media Manager Deleted'
        });
    });
};
