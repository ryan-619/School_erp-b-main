import HostelRoomModel from '../../models/hostelModels/hostelRoomModel.js';

export const getAllHostelRooms = (req, res) => {
    HostelRoomModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getHostelRoomById = (req, res) => {
    HostelRoomModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createHostelRoom = (req, res) => {
    HostelRoomModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Hostel Room Added',
            result
        });
    });
};

export const updateHostelRoom = (req, res) => {
    HostelRoomModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Hostel Room Updated'
        });
    });
};

export const deleteHostelRoom = (req, res) => {
    HostelRoomModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Hostel Room Deleted'
        });
    });
};
