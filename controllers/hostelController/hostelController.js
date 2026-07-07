import HostelModel from '../../models/hostelModels/hostelModel.js';

export const getAllHostels = (req, res) => {
    HostelModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getHostelById = (req, res) => {
    HostelModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createHostel = (req, res) => {
    HostelModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Hostel Added',
            result
        });
    });
};

export const updateHostel = (req, res) => {
    HostelModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Hostel Updated'
        });
    });
};

export const deleteHostel = (req, res) => {
    HostelModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Hostel Deleted'
        });
    });
};
