import StaffIdCardModel from '../../models/certificateModels/staffIdCardModel.js';

export const getAllStaffIdCards = (req, res) => {
    StaffIdCardModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getStaffIdCardById = (req, res) => {
    StaffIdCardModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createStaffIdCard = (req, res) => {
    StaffIdCardModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Staff ID Card Added',
            result
        });
    });
};

export const updateStaffIdCard = (req, res) => {
    StaffIdCardModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Staff ID Card Updated'
        });
    });
};

export const deleteStaffIdCard = (req, res) => {
    StaffIdCardModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Staff ID Card Deleted'
        });
    });
};
