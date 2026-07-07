import FileTypeModel from "../../models/settingModels/fileTypeModel.js";

export const getFileSettings = (req, res) => {
    FileTypeModel.getSettings((err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Failed to fetch settings",
                error: err.message
            });
        }

        res.status(200).json({
            success: true,
            data: result[0]
        });
    });
};

export const createFileSettings = (req, res) => {
    FileTypeModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Create failed",
                error: err.message
            });
        }

        res.status(201).json({
            success: true,
            message: "Settings created",
            insertId: result.insertId
        });
    });
};

export const updateFileSettings = (req, res) => {
    FileTypeModel.updateSettings(req.body, (err) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Update failed",
                error: err.message
            });
        }

        res.status(200).json({
            success: true,
            message: "Settings updated"
        });
    });
};