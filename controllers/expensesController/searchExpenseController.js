import SearchExpenseModel from '../../models/expensesModels/searchExpenseModel.js';

export const searchExpense = (req, res) => {

    SearchExpenseModel.search(req.body, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

export const searchExpenseByDate = (req, res) => {

    const { fromDate, toDate } = req.body;

    SearchExpenseModel.searchByDate(
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