import PickupPointModel from '../../models/transportModels/pickupPointModel.js';

export const getAllPickupPoints = (req, res) => {
    PickupPointModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getPickupPointById = (req, res) => {
    PickupPointModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createPickupPoint = (req, res) => {
    PickupPointModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Pickup Point Added',
            result
        });
    });
};

export const updatePickupPoint = (req, res) => {
    PickupPointModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Pickup Point Updated'
        });
    });
};

export const deletePickupPoint = (req, res) => {
    PickupPointModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Pickup Point Deleted'
        });
    });
};
