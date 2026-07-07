import SetupFrontOfficeModel from '../../models/officeModels/setupFrontOfficeModel.js';

export const getAllSetup = (req, res) => {

    SetupFrontOfficeModel.getAll((err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

export const createSetup = (req, res) => {

    SetupFrontOfficeModel.create(req.body, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Setup Added'
        });

    });

};

export const updateSetup = (req, res) => {

    SetupFrontOfficeModel.update(
        req.params.id,
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: 'Setup Updated'
            });

        }
    );

};

export const deleteSetup = (req, res) => {

    SetupFrontOfficeModel.delete(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Setup Deleted'
        });

    });

};