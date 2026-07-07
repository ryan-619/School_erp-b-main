import DesignMarksheetModel from '../../models/examinationModels/designMarksheetModel.js';

export const getAllMarksheetDesign = (req, res) => {

    DesignMarksheetModel.getAll((err, result) => {

        if (err) return res.status(500).json(err);

        res.json(result);

    });

};

export const createMarksheetDesign = (req, res) => {

    DesignMarksheetModel.create(req.body, (err, result) => {

        if (err) return res.status(500).json(err);

        res.json({
            message: 'Marksheet Design Added'
        });

    });

};

export const updateMarksheetDesign = (req, res) => {

    DesignMarksheetModel.update(
        req.params.id,
        req.body,
        (err, result) => {

            if (err) return res.status(500).json(err);

            res.json({
                message: 'Marksheet Design Updated'
            });

        }
    );

};

export const deleteMarksheetDesign = (req, res) => {

    DesignMarksheetModel.delete(req.params.id, (err, result) => {

        if (err) return res.status(500).json(err);

        res.json({
            message: 'Marksheet Design Deleted'
        });

    });

};