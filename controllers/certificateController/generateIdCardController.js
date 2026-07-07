import GenerateIdCardModel from '../../models/certificateModels/generateIdCardModel.js';

export const getAllGenerateIdCards = (req, res) => {
    GenerateIdCardModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getGenerateIdCardById = (req, res) => {
    GenerateIdCardModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createGenerateIdCard = (req, res) => {
    GenerateIdCardModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Generate ID Card Added',
            result
        });
    });
};

export const updateGenerateIdCard = (req, res) => {
    GenerateIdCardModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Generate ID Card Updated'
        });
    });
};

export const deleteGenerateIdCard = (req, res) => {
    GenerateIdCardModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Generate ID Card Deleted'
        });
    });
};
