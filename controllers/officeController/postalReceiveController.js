import PostalReceiveModel from '../../models/officeModels/postalReceiveModel.js';

export const getAllReceive = (req, res) => {

    PostalReceiveModel.getAll((err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

export const createReceive = (req, res) => {

    PostalReceiveModel.create(req.body, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Postal Receive Added'
        });

    });

};

export const updateReceive = (req, res) => {

    PostalReceiveModel.update(
        req.params.id,
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: 'Postal Receive Updated'
            });

        }
    );

};

export const deleteReceive = (req, res) => {

    PostalReceiveModel.delete(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Postal Receive Deleted'
        });

    });

};