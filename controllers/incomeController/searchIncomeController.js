import SearchIncomeModel from '../../models/incomeModels/searchIncomeModel.js';

export const searchIncome = (req, res) => {

    SearchIncomeModel.search(req.body, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

export const searchIncomeByDate = (req, res) => {

    const { fromDate, toDate } = req.body;

    SearchIncomeModel.searchByDate(
        fromDate,
        toDate,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json(result);

        }
    );

};