import TransportFeesMasterModel from '../../models/transportModels/transportFeesMasterModel.js';

export const getAllTransportFeesMaster = (req, res) => {
    TransportFeesMasterModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getTransportFeesMasterById = (req, res) => {
    TransportFeesMasterModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createTransportFeesMaster = (req, res) => {
    TransportFeesMasterModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Transport Fees Master Added',
            result
        });
    });
};

export const updateTransportFeesMaster = (req, res) => {
    TransportFeesMasterModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Transport Fees Master Updated'
        });
    });
};

export const deleteTransportFeesMaster = (req, res) => {
    TransportFeesMasterModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Transport Fees Master Deleted'
        });
    });
};
