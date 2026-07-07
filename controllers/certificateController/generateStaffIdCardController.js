import GenerateStaffIdCardModel from '../../models/certificateModels/generateStaffIdCardModel.js';

export const getAllGenerateStaffIdCards = (req, res) => {
    GenerateStaffIdCardModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getGenerateStaffIdCardById = (req, res) => {
    GenerateStaffIdCardModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createGenerateStaffIdCard = (req, res) => {
    GenerateStaffIdCardModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Generate Staff ID Card Added',
            result
        });
    });
};

export const updateGenerateStaffIdCard = (req, res) => {
    GenerateStaffIdCardModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Generate Staff ID Card Updated'
        });
    });
};

export const deleteGenerateStaffIdCard = (req, res) => {
    GenerateStaffIdCardModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Generate Staff ID Card Deleted'
        });
    });
};
