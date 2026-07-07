import FeesReminderModel from '../../models/paymentModels/feesReminderModel.js';

export const getAllReminder = (req, res) => {

    FeesReminderModel.getAll((err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

export const createReminder = (req, res) => {

    FeesReminderModel.create(req.body, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Reminder Added'
        });

    });

};

export const updateReminder = (req, res) => {

    FeesReminderModel.update(
        req.params.id,
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: 'Reminder Updated'
            });

        }
    );

};

export const deleteReminder = (req, res) => {

    FeesReminderModel.delete(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Reminder Deleted'
        });

    });

};