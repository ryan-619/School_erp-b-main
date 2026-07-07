import AssignVehicleModel from '../../models/transportModels/assignVehicleModel.js';

export const getAllAssignVehicles = (req, res) => {
    AssignVehicleModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getAssignVehicleById = (req, res) => {
    AssignVehicleModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createAssignVehicle = (req, res) => {
    AssignVehicleModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Assign Vehicle Added',
            result
        });
    });
};

export const updateAssignVehicle = (req, res) => {
    AssignVehicleModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Assign Vehicle Updated'
        });
    });
};

export const deleteAssignVehicle = (req, res) => {
    AssignVehicleModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Assign Vehicle Deleted'
        });
    });
};
