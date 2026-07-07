import RoomTypeModel from '../../models/hostelModels/roomTypeModel.js';

export const getAllRoomTypes = (req, res) => {
    RoomTypeModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getRoomTypeById = (req, res) => {
    RoomTypeModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createRoomType = (req, res) => {
    RoomTypeModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Room Type Added',
            result
        });
    });
};

export const updateRoomType = (req, res) => {
    RoomTypeModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Room Type Updated'
        });
    });
};

export const deleteRoomType = (req, res) => {
    RoomTypeModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Room Type Deleted'
        });
    });
};
