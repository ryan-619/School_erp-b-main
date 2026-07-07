import SectionsModel from '../../models/academicModels/sectionsModel.js';

export const getAllSections = (req, res) => {

    SectionsModel.getAll((err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

export const createSection = (req, res) => {

    SectionsModel.create(req.body, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Section Added'
        });

    });

};

export const updateSection = (req, res) => {

    SectionsModel.update(
        req.params.id,
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: 'Section Updated'
            });

        }
    );

};

export const deleteSection = (req, res) => {

    SectionsModel.delete(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Section Deleted'
        });

    });

};