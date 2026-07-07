import ContentShareListModel
from '../../models/downloadModels/contentShareListModel.js';

export const getAllContentShare = (req, res) => {

    ContentShareListModel.getAll(
        (err, result) => {

            if (err) {

                return res.status(500).json({
                    success: false,
                    error: err
                });

            }

            res.status(200).json({
                success: true,
                count: result.length,
                data: result
            });

        }
    );

};


export const getContentShareById = (req, res) => {

    ContentShareListModel.getById(
        req.params.id,
        (err, result) => {

            if (err) {

                return res.status(500).json(err);

            }

            res.json(result);

        }
    );

};


export const createContentShare = (req, res) => {

    ContentShareListModel.create(
        req.body,
        (err, result) => {

            if (err) {

                return res.status(500).json(err);

            }

            res.status(201).json({
                success: true,
                message: 'Content Shared Successfully',
                id: result.insertId
            });

        }
    );

};


export const updateContentShare = (req, res) => {

    ContentShareListModel.update(
        req.params.id,
        req.body,
        (err) => {

            if (err) {

                return res.status(500).json(err);

            }

            res.json({
                success: true,
                message: 'Content Updated'
            });

        }
    );

};


export const deleteContentShare = (req, res) => {

    ContentShareListModel.delete(
        req.params.id,
        (err) => {

            if (err) {

                return res.status(500).json(err);

            }

            res.json({
                success: true,
                message: 'Content Deleted'
            });

        }
    );

};