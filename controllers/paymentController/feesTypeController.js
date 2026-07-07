import FeesTypeModel from '../../models/paymentModels/feesTypeModel.js';

export const getAllFeesType = (req, res) => {

    FeesTypeModel.getAll((err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createFeesType = (req, res) => {

    FeesTypeModel.create(req.body, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Fees Type Created'
        });
    });
};

export const updateFeesType = (req, res) => {

    FeesTypeModel.update(
        req.params.id,
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: 'Fees Type Updated'
            });
        }
    );
};

export const deleteFeesType = (req, res) => {

    FeesTypeModel.delete(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Fees Type Deleted'
        });
    });
};