import SystemFieldModel from "../../models/settingModels/systemFieldModel.js";

export const getSystemFields = (req, res) => {
    SystemFieldModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Failed to fetch fields",
                error: err.message
            });
        }

        res.status(200).json({
            success: true,
            total: result.length,
            data: result
        });
    });
};

export const getFieldsByType = (req, res) => {
    const { type } = req.params;

    SystemFieldModel.getByUserType(type, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Failed",
                error: err.message
            });
        }

        res.status(200).json({
            success: true,
            data: result
        });
    });
};

export const createSystemField = (req, res) => {
    SystemFieldModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Create failed",
                error: err.message
            });
        }

        res.status(201).json({
            success: true,
            message: "Field created",
            insertId: result.insertId
        });
    });
};

export const updateSystemFieldStatus = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    SystemFieldModel.updateStatus(id, status, (err) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Update failed",
                error: err.message
            });
        }

        res.status(200).json({
            success: true,
            message: "Status updated"
        });
    });
};

export const deleteSystemField = (req, res) => {
    const { id } = req.params;

    SystemFieldModel.delete(id, (err) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Delete failed",
                error: err.message
            });
        }

        res.status(200).json({
            success: true,
            message: "Field deleted"
        });
    });
};