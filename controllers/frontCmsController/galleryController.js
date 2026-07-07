import GalleryModel from '../../models/frontCmsModels/galleryModel.js';

export const getAllGallery = (req, res) => {
    GalleryModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getGalleryById = (req, res) => {
    GalleryModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createGallery = (req, res) => {
    GalleryModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Gallery Added',
            result
        });
    });
};

export const updateGallery = (req, res) => {
    GalleryModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Gallery Updated'
        });
    });
};

export const deleteGallery = (req, res) => {
    GalleryModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Gallery Deleted'
        });
    });
};
