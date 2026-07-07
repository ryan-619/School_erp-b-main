import PageModel from '../../models/frontCmsModels/pageModel.js';

export const getAllPages = (req, res) => {
    PageModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getPageById = (req, res) => {
    PageModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createPage = (req, res) => {
    PageModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Page Added',
            result
        });
    });
};

export const updatePage = (req, res) => {
    PageModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Page Updated'
        });
    });
};

export const deletePage = (req, res) => {
    PageModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Page Deleted'
        });
    });
};
