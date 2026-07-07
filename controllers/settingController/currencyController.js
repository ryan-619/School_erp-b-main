import CurrencyModel from "../../models/settingModels/currencyModel.js";


export const getCurrencies = (req, res) => {
    CurrencyModel.getAll((err, currencies) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Failed to fetch currencies",
                error: err.message,
            });
        }

        res.status(200).json({
            success: true,
            total: currencies.length,
            data: currencies,
        });
    });
};



export const createCurrency = (req, res) => {
    CurrencyModel.create(
        req.body,
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Failed to create currency",
                    error: err.message,
                });
            }

            res.status(201).json({
                success: true,
                message: "Currency created successfully",
                currencyId: result.insertId,
            });
        }
    );
};



export const updateCurrency = (req, res) => {
    const { id } = req.params;

    CurrencyModel.update(
        id,
        req.body,
        (err) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Failed to update currency",
                    error: err.message,
                });
            }

            res.status(200).json({
                success: true,
                message: "Currency updated successfully",
            });
        }
    );
};



export const updateCurrencyStatus = (req, res) => {
    const { id } = req.params;

    const { status } = req.body;

    CurrencyModel.updateStatus(
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
                message: "Currency status updated",
            });
        }
    );
};



export const setBaseCurrency = (req, res) => {
    const { id } = req.params;

    CurrencyModel.removeBase((err) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Failed to reset base currency",
                error: err.message,
            });
        }

        CurrencyModel.setBase(
            id,
            (err) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: "Failed to set base currency",
                        error: err.message,
                    });
                }

                res.status(200).json({
                    success: true,
                    message: "Base currency updated successfully",
                });
            }
        );
    });
};



export const deleteCurrency = (req, res) => {
    const { id } = req.params;

    CurrencyModel.delete(
        id,
        (err) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Failed to delete currency",
                    error: err.message,
                });
            }

            res.status(200).json({
                success: true,
                message: "Currency deleted successfully",
            });
        }
    );
};