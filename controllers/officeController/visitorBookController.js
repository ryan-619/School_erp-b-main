import VisitorBookModel from '../../models/officeModels/visitorBookModel.js';

export const getAllVisitors = (req, res) => {

    VisitorBookModel.getAll((err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

export const createVisitor = (req, res) => {

    VisitorBookModel.create(req.body, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Visitor Added'
        });

    });

};

export const updateVisitor = (req, res) => {

    VisitorBookModel.update(
        req.params.id,
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: 'Visitor Updated'
            });

        }
    );

};

export const deleteVisitor = (req, res) => {

    VisitorBookModel.delete(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Visitor Deleted'
        });

    });

};