import SessionModel from "../../models/settingModels/sessionModel.js";


export const getAllSessions = (req, res) => {
    SessionModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                error: err,
            });
        }

        res.status(200).json({
            success: true,
            count: result.length,
            data: result,
        });
    });
};



export const createSession = (req, res) => {
    SessionModel.create(
        req.body,
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    error: err,
                });
            }

            res.status(201).json({
                success: true,
                message: "Session created successfully",
                insertId: result.insertId,
            });
        }
    );
};



export const updateSession = (req, res) => {
    const { id } = req.params;

    SessionModel.update(
        id,
        req.body,
        (err) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    error: err,
                });
            }

            res.json({
                success: true,
                message: "Session updated successfully",
            });
        }
    );
};



export const deleteSession = (req, res) => {
    const { id } = req.params;

    SessionModel.delete(
        id,
        (err) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    error: err,
                });
            }

            res.json({
                success: true,
                message: "Session deleted successfully",
            });
        }
    );
};



export const activateSession = (req, res) => {
    const { id } = req.params;

    SessionModel.deactivateAll((err) => {
        if (err) {
            return res.status(500).json({
                success: false,
                error: err,
            });
        }

        SessionModel.activate(
            id,
            (err) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        error: err,
                    });
                }

                res.json({
                    success: true,
                    message: "Session activated successfully",
                });
            }
        );
    });
};