import CustomFieldModel from "../../models/settingModels/customFieldModel.js";

export const getCustomFields = (req, res) => {
    CustomFieldModel.getAll((err, result) => {
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

export const getCustomField = (req, res) => {
    const { id } = req.params;

    CustomFieldModel.getById(id, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Fetch failed",
                error: err.message
            });
        }

        res.status(200).json({
            success: true,
            data: result[0]
        });
    });
};

export const createCustomField = (req, res) => {
    const data = {
        belongs_to: req.body.belongs_to,
        field_type: req.body.field_type,
        field_name: req.body.field_name,
        grid_column: req.body.grid_column,
        field_values: req.body.field_values,
        is_required: req.body.is_required,
        show_on_table: req.body.show_on_table
    };

    CustomFieldModel.create(data, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Create failed",
                error: err.message
            });
        }

        res.status(201).json({
            success: true,
            message: "Custom field created",
            insertId: result.insertId
        });
    });
};

export const updateCustomField = (req, res) => {
    const { id } = req.params;

    CustomFieldModel.update(id, req.body, (err) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Update failed",
                error: err.message
            });
        }

        res.status(200).json({
            success: true,
            message: "Custom field updated"
        });
    });
};

export const deleteCustomField = (req, res) => {
    const { id } = req.params;

    CustomFieldModel.delete(id, (err) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Delete failed",
                error: err.message
            });
        }

        res.status(200).json({
            success: true,
            message: "Custom field deleted"
        });
    });
};