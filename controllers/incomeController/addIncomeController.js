import AddIncomeModel from '../../models/incomeModels/addIncomeModel.js';

export const getAllIncome = (req, res) => {

    AddIncomeModel.getAll((err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

export const getIncomeById = (req, res) => {

    AddIncomeModel.getById(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

export const createIncome = (req, res) => {

    AddIncomeModel.create(req.body, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Income Added Successfully',
            result
        });

    });

};

export const updateIncome = (req, res) => {

    AddIncomeModel.update(
        req.params.id,
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: 'Income Updated Successfully'
            });

        }
    );

};

export const deleteIncome = (req, res) => {

    AddIncomeModel.delete(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Income Deleted Successfully'
        });

    });

};