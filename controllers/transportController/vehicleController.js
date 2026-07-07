import VehicleModel from '../../models/transportModels/vehicleModel.js';

export const getAllVehicles = (req, res) => {
    VehicleModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getVehicleById = (req, res) => {
    VehicleModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createVehicle = (req, res) => {
    VehicleModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Vehicle Added',
            result
        });
    });
};

export const updateVehicle = (req, res) => {
    VehicleModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Vehicle Updated'
        });
    });
};

export const deleteVehicle = (req, res) => {
    VehicleModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Vehicle Deleted'
        });
    });
};
