import FeesCarryForwardModel from '../../models/paymentModels/feesCarryForwardModel.js';

export const getAllCarryForward = (req, res) => {

    FeesCarryForwardModel.getAll((err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

export const createCarryForward = (req, res) => {

    FeesCarryForwardModel.create(req.body, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Fees Carry Forward Added'
        });

    });

};

export const deleteCarryForward = (req, res) => {

    FeesCarryForwardModel.delete(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Deleted Successfully'
        });

    });

};