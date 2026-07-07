import ApproveLeaveModel from '../../models/attendanceModels/approveLeaveModel.js';

export const getAllLeaves = (req, res) => {

    ApproveLeaveModel.getAll((err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

export const getLeaveById = (req, res) => {

    ApproveLeaveModel.getById(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

export const createLeave = (req, res) => {

    ApproveLeaveModel.create(req.body, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Leave Applied Successfully',
            result
        });

    });

};

export const updateLeave = (req, res) => {

    ApproveLeaveModel.update(
        req.params.id,
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: 'Leave Updated Successfully'
            });

        }
    );

};

export const deleteLeave = (req, res) => {

    ApproveLeaveModel.delete(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Leave Deleted Successfully'
        });

    });

};