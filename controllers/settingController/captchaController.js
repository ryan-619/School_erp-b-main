import CaptchaModel from "../../models/settingModels/captchaModel.js";


export const getCaptchas = (
    req,
    res
) => {

    CaptchaModel.getAll(
        (err, captchas) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Failed to fetch captcha settings",
                    error: err.message,
                });
            }

            res.status(200).json({
                success: true,
                total: captchas.length,
                data: captchas,
            });
        }
    );
};



export const createCaptcha = (
    req,
    res
) => {

    CaptchaModel.create(
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Failed to create captcha",
                    error: err.message,
                });
            }

            res.status(201).json({
                success: true,
                message: "Captcha created successfully",
                captchaId: result.insertId,
            });
        }
    );
};



export const updateCaptcha = (
    req,
    res
) => {

    const { id } = req.params;

    CaptchaModel.update(
        id,
        req.body,
        (err) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Failed to update captcha",
                    error: err.message,
                });
            }

            res.status(200).json({
                success: true,
                message: "Captcha updated successfully",
            });
        }
    );
};



export const updateCaptchaStatus = (
    req,
    res
) => {

    const { id } = req.params;

    const { status } = req.body;

    CaptchaModel.updateStatus(
        id,
        status,
        (err) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Failed to update status",
                    error: err.message,
                });
            }

            res.status(200).json({
                success: true,
                message: "Captcha status updated",
            });
        }
    );
};



export const deleteCaptcha = (
    req,
    res
) => {

    const { id } = req.params;

    CaptchaModel.delete(
        id,
        (err) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Failed to delete captcha",
                    error: err.message,
                });
            }

            res.status(200).json({
                success: true,
                message: "Captcha deleted successfully",
            });
        }
    );
};