import RoutePickupPointModel from '../../models/transportModels/routePickupPointModel.js';

export const getAllRoutePickupPoints = (req, res) => {
    RoutePickupPointModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getRoutePickupPointById = (req, res) => {
    RoutePickupPointModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createRoutePickupPoint = (req, res) => {
    RoutePickupPointModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Route Pickup Point Added',
            result
        });
    });
};

export const updateRoutePickupPoint = (req, res) => {
    RoutePickupPointModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Route Pickup Point Updated'
        });
    });
};

export const deleteRoutePickupPoint = (req, res) => {
    RoutePickupPointModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Route Pickup Point Deleted'
        });
    });
};
