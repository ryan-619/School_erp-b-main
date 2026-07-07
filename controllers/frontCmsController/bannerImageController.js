import BannerImageModel from '../../models/frontCmsModels/bannerImageModel.js';

export const getAllBannerImages = (req, res) => {
    BannerImageModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getBannerImageById = (req, res) => {
    BannerImageModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createBannerImage = (req, res) => {
    BannerImageModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Banner Image Added',
            result
        });
    });
};

export const updateBannerImage = (req, res) => {
    BannerImageModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Banner Image Updated'
        });
    });
};

export const deleteBannerImage = (req, res) => {
    BannerImageModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Banner Image Deleted'
        });
    });
};
