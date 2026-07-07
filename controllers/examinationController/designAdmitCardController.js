import DesignAdmitCardModel from '../../models/examinationModels/designAdmitCardModel.js';

export const getAllAdmitCard = (req, res) => {

    DesignAdmitCardModel.getAll((err, result) => {

        if (err) return res.status(500).json(err);

        res.json(result);

    });

};

export const createAdmitCard = (req, res) => {

    DesignAdmitCardModel.create(req.body, (err, result) => {

        if (err) return res.status(500).json(err);

        res.json({
            message: 'Admit Card Design Added'
        });

    });

};

export const updateAdmitCard = (req, res) => {

    DesignAdmitCardModel.update(
        req.params.id,
        req.body,
        (err, result) => {

            if (err) return res.status(500).json(err);

            res.json({
                message: 'Admit Card Design Updated'
            });

        }
    );

};

export const deleteAdmitCard = (req, res) => {

    DesignAdmitCardModel.delete(req.params.id, (err, result) => {

        if (err) return res.status(500).json(err);

        res.json({
            message: 'Admit Card Design Deleted'
        });

    });

};