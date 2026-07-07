import CollectFeesModel from '../../models/paymentModels/collectFeesModel.js';

export const getAllCollectFees = (req, res) => {

    CollectFeesModel.getAll((err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

export const getCollectFeesById = (req, res) => {

    CollectFeesModel.getById(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

export const createCollectFees = (req, res) => {

    CollectFeesModel.create(req.body, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Fees Collected Successfully',
            result
        });

    });

};

export const updateCollectFees = (req, res) => {

    CollectFeesModel.update(
        req.params.id,
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: 'Collect Fees Updated'
            });

        }
    );

};

export const deleteCollectFees = (req, res) => {

    CollectFeesModel.delete(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Collect Fees Deleted'
        });

    });

};