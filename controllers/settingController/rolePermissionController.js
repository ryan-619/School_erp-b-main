import RolePermissionModel from "../../models/settingModels/rolePermissionModel.js";

export const getRoles = (req, res) => {
    RolePermissionModel.getAll((err, result) => {
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


export const getRole = (req, res) => {
    const { id } = req.params;

    RolePermissionModel.getById(
        id,
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    error: err,
                });
            }

            res.status(200).json({
                success: true,
                data: result,
            });
        }
    );
};


export const createRole = (req, res) => {
    RolePermissionModel.create(
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
                message: "Role created",
                insertId: result.insertId,
            });
        }
    );
};


export const updateRole = (req, res) => {
    const { id } = req.params;

    RolePermissionModel.update(
        id,
        req.body,
        (err) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    error: err,
                });
            }

            res.status(200).json({
                success: true,
                message: "Role updated",
            });
        }
    );
};


export const deleteRole = (req, res) => {
    const { id } = req.params;

    RolePermissionModel.delete(
        id,
        (err) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    error: err,
                });
            }

            res.status(200).json({
                success: true,
                message: "Role deleted",
            });
        }
    );
};