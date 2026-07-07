import FeesMasterModel from '../../models/paymentModels/feesMasterModel.js';

export const getAllFeesMaster = (req, res) => {

    FeesMasterModel.getAll((err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getFeesMasterById = (req, res) => {

    FeesMasterModel.getById(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createFeesMaster = (req, res) => {

    FeesMasterModel.create(req.body, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Fees Master Created',
            result
        });
    });
};

export const updateFeesMaster = (req, res) => {

    FeesMasterModel.update(
        req.params.id,
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: 'Fees Master Updated'
            });
        }
    );
};

export const deleteFeesMaster = (req, res) => {

    FeesMasterModel.delete(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Fees Master Deleted'
        });
    });
};