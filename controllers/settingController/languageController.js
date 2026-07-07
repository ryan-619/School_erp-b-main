import LanguageModel from "../../models/settingModels/languageModel.js";


export const getLanguages = (
    req,
    res
) => {

    LanguageModel.getAll(
        (err, languages) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Failed to fetch languages",
                    error: err.message,
                });
            }

            res.status(200).json({
                success: true,
                total: languages.length,
                data: languages,
            });
        }
    );
};



export const createLanguage = (
    req,
    res
) => {

    LanguageModel.create(
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Failed to create language",
                    error: err.message,
                });
            }

            res.status(201).json({
                success: true,
                message: "Language created successfully",
                languageId: result.insertId,
            });
        }
    );
};



export const updateLanguage = (
    req,
    res
) => {

    const { id } = req.params;

    LanguageModel.update(
        id,
        req.body,
        (err) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Failed to update language",
                    error: err.message,
                });
            }

            res.status(200).json({
                success: true,
                message: "Language updated successfully",
            });
        }
    );
};



export const updateLanguageStatus = (
    req,
    res
) => {

    const { id } = req.params;
    const { status } = req.body;

    LanguageModel.updateStatus(
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
                message: "Status updated",
            });
        }
    );
};



export const updateRTL = (
    req,
    res
) => {

    const { id } = req.params;
    const { is_rtl } = req.body;

    LanguageModel.updateRTL(
        id,
        is_rtl,
        (err) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    error: err.message,
                });
            }

            res.status(200).json({
                success: true,
                message: "RTL updated",
            });
        }
    );
};



export const setActiveLanguage = (
    req,
    res
) => {

    const { id } = req.params;

    LanguageModel.clearActive(
        (err) => {

            if (err) {
                return res.status(500).json(err);
            }

            LanguageModel.setActive(
                id,
                (err) => {

                    if (err) {
                        return res.status(500).json(err);
                    }

                    res.status(200).json({
                        success: true,
                        message:
                            "Active language updated",
                    });
                }
            );
        }
    );
};



export const deleteLanguage = (
    req,
    res
) => {

    const { id } = req.params;

    LanguageModel.delete(
        id,
        (err) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    error: err.message,
                });
            }

            res.status(200).json({
                success: true,
                message:
                    "Language deleted successfully",
            });
        }
    );
};