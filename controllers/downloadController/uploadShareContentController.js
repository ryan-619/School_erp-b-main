import UploadShareContentModel
from '../../models/downloadModels/uploadShareContentModel.js';


export const getAllUploadContent = (req, res) => {

    UploadShareContentModel.getAll(
        (err, result) => {

            if (err) {

                return res.status(500).json(err);

            }

            res.json(result);

        }
    );

};



export const getUploadContentById = (req, res) => {

    UploadShareContentModel.getById(
        req.params.id,
        (err, result) => {

            if (err) {

                return res.status(500).json(err);

            }

            res.json(result);

        }
    );

};



export const createUploadContent = (req, res) => {

    const data = {

        ...req.body,

        file_name: req.file?.filename,

        file_path: req.file?.path

    };

    UploadShareContentModel.create(
        data,
        (err, result) => {

            if (err) {

                return res.status(500).json(err);

            }

            res.status(201).json({

                success: true,
                message: 'Content Uploaded',

                id: result.insertId

            });

        }
    );

};



export const deleteUploadContent = (req, res) => {

    UploadShareContentModel.delete(
        req.params.id,
        (err) => {

            if (err) {

                return res.status(500).json(err);

            }

            res.json({

                success: true,
                message: 'Deleted'

            });

        }
    );

};