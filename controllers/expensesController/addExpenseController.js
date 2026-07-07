import AddExpenseModel from '../../models/expensesModels/addExpenseModel.js';

export const getAllExpenses = (req, res) => {

    AddExpenseModel.getAll((err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

export const getExpenseById = (req, res) => {

    AddExpenseModel.getById(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

export const createExpense = (req, res) => {

    AddExpenseModel.create(req.body, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Expense Added Successfully',
            result
        });

    });

};

export const updateExpense = (req, res) => {

    AddExpenseModel.update(
        req.params.id,
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: 'Expense Updated Successfully'
            });

        }
    );

};

export const deleteExpense = (req, res) => {

    AddExpenseModel.delete(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Expense Deleted Successfully'
        });

    });

};