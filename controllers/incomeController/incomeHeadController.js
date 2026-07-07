import IncomeHeadModel from '../../models/incomeModels/incomeHeadModel.js';

export const getAllIncomeHead = (req, res) => {

    IncomeHeadModel.getAll((err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

export const getIncomeHeadById = (req, res) => {

    IncomeHeadModel.getById(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

export const createIncomeHead = (req, res) => {

    IncomeHeadModel.create(req.body, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Income Head Created Successfully',
            result
        });

    });

};

export const updateIncomeHead = (req, res) => {

    IncomeHeadModel.update(
        req.params.id,
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: 'Income Head Updated Successfully'
            });

        }
    );

};

export const deleteIncomeHead = (req, res) => {

    IncomeHeadModel.delete(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Income Head Deleted Successfully'
        });

    });

};