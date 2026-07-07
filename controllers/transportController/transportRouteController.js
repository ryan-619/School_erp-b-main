import TransportRouteModel from '../../models/transportModels/transportRouteModel.js';

export const getAllTransportRoutes = (req, res) => {
    TransportRouteModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getTransportRouteById = (req, res) => {
    TransportRouteModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createTransportRoute = (req, res) => {
    TransportRouteModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Transport Route Added',
            result
        });
    });
};

export const updateTransportRoute = (req, res) => {
    TransportRouteModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Transport Route Updated'
        });
    });
};

export const deleteTransportRoute = (req, res) => {
    TransportRouteModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Transport Route Deleted'
        });
    });
};
