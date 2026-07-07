import EventModel from '../../models/frontCmsModels/eventModel.js';

export const getAllEvents = (req, res) => {
    EventModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getEventById = (req, res) => {
    EventModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createEvent = (req, res) => {
    EventModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Event Added',
            result
        });
    });
};

export const updateEvent = (req, res) => {
    EventModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Event Updated'
        });
    });
};

export const deleteEvent = (req, res) => {
    EventModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Event Deleted'
        });
    });
};
