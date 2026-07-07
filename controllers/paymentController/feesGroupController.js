import FeesGroupModel from '../../models/paymentModels/feesGroupModel.js';

export const getAllFeesGroup = (req, res) => {

    FeesGroupModel.getAll((err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createFeesGroup = (req, res) => {

    FeesGroupModel.create(req.body, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Fees Group Created'
        });
    });
};

export const updateFeesGroup = (req, res) => {

    FeesGroupModel.update(
        req.params.id,
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: 'Fees Group Updated'
            });
        }
    );
};

export const deleteFeesGroup = (req, res) => {

    FeesGroupModel.delete(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Fees Group Deleted'
        });
    });
};