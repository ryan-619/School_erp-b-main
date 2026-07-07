import SearchDueFeesModel from '../../models/paymentModels/searchDueFeesModel.js';

export const getAllDueFees = (req, res) => {

    SearchDueFeesModel.getAll((err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};