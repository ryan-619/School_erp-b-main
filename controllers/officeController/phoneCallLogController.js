import PhoneCallLogModel from '../../models/officeModels/phoneCallLogModel.js';

export const getAllCallLogs = (req, res) => {

    PhoneCallLogModel.getAll((err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

export const createCallLog = (req, res) => {

    PhoneCallLogModel.create(req.body, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Call Log Added'
        });

    });

};

export const updateCallLog = (req, res) => {

    PhoneCallLogModel.update(
        req.params.id,
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: 'Call Log Updated'
            });

        }
    );

};

export const deleteCallLog = (req, res) => {

    PhoneCallLogModel.delete(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Call Log Deleted'
        });

    });

};