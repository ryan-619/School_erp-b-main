import ModuleModel from "../../models/settingModels/moduleModel.js";


export const getModules = (req, res) => {
    ModuleModel.getAll(
        (err, modules) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Failed to fetch modules",
                    error: err.message
                });
            }

            res.status(200).json({
                success: true,
                total: modules.length,
                data: modules
            });
        }
    );
};



export const getModulesByType = (
    req,
    res
) => {

    const { type } = req.params;

    ModuleModel.getByType(
        type,
        (err, modules) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message:
                        "Failed to fetch modules",
                    error: err.message
                });
            }

            res.status(200).json({
                success: true,
                data: modules
            });
        }
    );
};



export const createModule = (
    req,
    res
) => {

    ModuleModel.create(
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message:
                        "Failed to create module",
                    error: err.message
                });
            }

            res.status(201).json({
                success: true,
                message:
                    "Module created successfully",
                moduleId:
                    result.insertId
            });
        }
    );
};



export const updateModule = (
    req,
    res
) => {

    const { id } = req.params;

    ModuleModel.update(
        id,
        req.body,
        (err) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message:
                        "Failed to update module",
                    error: err.message
                });
            }

            res.status(200).json({
                success: true,
                message:
                    "Module updated successfully"
            });
        }
    );
};



export const updateModuleStatus = (
    req,
    res
) => {

    const { id } = req.params;

    const { status } = req.body;

    ModuleModel.updateStatus(
        id,
        status,
        (err) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message:
                        "Failed to update status",
                    error: err.message
                });
            }

            res.status(200).json({
                success: true,
                message:
                    "Module status updated"
            });
        }
    );
};



export const deleteModule = (
    req,
    res
) => {

    const { id } = req.params;

    ModuleModel.delete(
        id,
        (err) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message:
                        "Failed to delete module",
                    error: err.message
                });
            }

            res.status(200).json({
                success: true,
                message:
                    "Module deleted successfully"
            });
        }
    );
};