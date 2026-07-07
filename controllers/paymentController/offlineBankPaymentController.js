import OfflineBankPaymentModel from '../../models/paymentModels/offlineBankPaymentModel.js';

export const getAllOfflinePayments = (req, res) => {

    OfflineBankPaymentModel.getAll((err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

export const createOfflinePayment = (req, res) => {

    OfflineBankPaymentModel.create(req.body, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Offline Payment Added'
        });

    });

};

export const updateOfflinePayment = (req, res) => {

    OfflineBankPaymentModel.update(
        req.params.id,
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: 'Offline Payment Updated'
            });

        }
    );

};

export const deleteOfflinePayment = (req, res) => {

    OfflineBankPaymentModel.delete(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Offline Payment Deleted'
        });

    });

};