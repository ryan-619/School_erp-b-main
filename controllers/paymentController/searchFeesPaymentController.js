import SearchFeesPaymentModel from '../../models/paymentModels/searchFeesPaymentModel.js';

export const searchFeesPayment = (req, res) => {

    SearchFeesPaymentModel.search(req.body, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};