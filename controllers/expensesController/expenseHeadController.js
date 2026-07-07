import ExpenseHeadModel from '../../models/expensesModels/expenseHeadModel.js';

export const getAllExpenseHead = (req, res) => {

    ExpenseHeadModel.getAll((err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

export const getExpenseHeadById = (req, res) => {

    ExpenseHeadModel.getById(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

export const createExpenseHead = (req, res) => {

    ExpenseHeadModel.create(req.body, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Expense Head Created Successfully',
            result
        });

    });

};

export const updateExpenseHead = (req, res) => {

    ExpenseHeadModel.update(
        req.params.id,
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: 'Expense Head Updated Successfully'
            });

        }
    );

};

export const deleteExpenseHead = (req, res) => {

    ExpenseHeadModel.delete(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Expense Head Deleted Successfully'
        });

    });

};