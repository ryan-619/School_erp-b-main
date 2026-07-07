import MarksDivisionModel from '../../models/examinationModels/marksDivisionModel.js';

export const getAllMarksDivision = (req, res) => {

    MarksDivisionModel.getAll((err, result) => {

        if (err) return res.status(500).json(err);

        res.json(result);

    });

};

export const createMarksDivision = (req, res) => {

    MarksDivisionModel.create(req.body, (err, result) => {

        if (err) return res.status(500).json(err);

        res.json({
            message: 'Marks Division Added'
        });

    });

};

export const updateMarksDivision = (req, res) => {

    MarksDivisionModel.update(
        req.params.id,
        req.body,
        (err, result) => {

            if (err) return res.status(500).json(err);

            res.json({
                message: 'Marks Division Updated'
            });

        }
    );

};

export const deleteMarksDivision = (req, res) => {

    MarksDivisionModel.delete(req.params.id, (err, result) => {

        if (err) return res.status(500).json(err);

        res.json({
            message: 'Marks Division Deleted'
        });

    });

};