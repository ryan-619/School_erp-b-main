import NewsModel from '../../models/frontCmsModels/newsModel.js';

export const getAllNews = (req, res) => {
    NewsModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getNewsById = (req, res) => {
    NewsModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createNews = (req, res) => {
    NewsModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'News Added',
            result
        });
    });
};

export const updateNews = (req, res) => {
    NewsModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'News Updated'
        });
    });
};

export const deleteNews = (req, res) => {
    NewsModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'News Deleted'
        });
    });
};
