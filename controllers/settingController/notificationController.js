import NotificationModel from "../../models/settingModels/notificationModel.js";


export const getNotifications = (
    req,
    res
) => {

    NotificationModel.getAll(
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    error: err
                });
            }

            res.status(200).json({
                success: true,
                count: result.length,
                data: result
            });

        }
    );

};



export const getNotification = (
    req,
    res
) => {

    const { id } = req.params;

    NotificationModel.getById(
        id,
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    error: err
                });
            }

            res.json({
                success: true,
                data: result
            });

        }
    );

};



export const createNotification = (
    req,
    res
) => {

    NotificationModel.create(
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    error: err
                });
            }

            res.status(201).json({
                success: true,
                message: "Notification created",
                insertId: result.insertId
            });

        }
    );

};



export const updateNotification = (
    req,
    res
) => {

    const { id } = req.params;

    NotificationModel.update(
        id,
        req.body,
        (err) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    error: err
                });
            }

            res.json({
                success: true,
                message: "Notification updated"
            });

        }
    );

};



export const deleteNotification = (
    req,
    res
) => {

    const { id } = req.params;

    NotificationModel.delete(
        id,
        (err) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    error: err
                });
            }

            res.json({
                success: true,
                message: "Notification deleted"
            });

        }
    );

};