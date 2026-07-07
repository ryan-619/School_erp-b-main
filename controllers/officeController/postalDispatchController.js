import PostalDispatchModel from '../../models/officeModels/postalDispatchModel.js';

export const getAllDispatch = (req, res) => {

    PostalDispatchModel.getAll((err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

export const createDispatch = (req, res) => {

    PostalDispatchModel.create(req.body, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Postal Dispatch Added'
        });

    });

};

export const updateDispatch = (req, res) => {

    PostalDispatchModel.update(
        req.params.id,
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: 'Postal Dispatch Updated'
            });

        }
    );

};

export const deleteDispatch = (req, res) => {

    PostalDispatchModel.delete(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Postal Dispatch Deleted'
        });

    });

};