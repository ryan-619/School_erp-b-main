import FeesDiscountModel from '../../models/paymentModels/feesDiscountModel.js';

export const getAllFeesDiscount = (req, res) => {

    FeesDiscountModel.getAll((err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createFeesDiscount = (req, res) => {

    FeesDiscountModel.create(req.body, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Fees Discount Created'
        });
    });
};

export const updateFeesDiscount = (req, res) => {

    FeesDiscountModel.update(
        req.params.id,
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: 'Fees Discount Updated'
            });
        }
    );
};

export const deleteFeesDiscount = (req, res) => {

    FeesDiscountModel.delete(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Fees Discount Deleted'
        });
    });
};