import SettingsModel from "../../models/settingModels/settingsModel.js";



export const getSettings = (req, res) => {

    SettingsModel.getSettings(
        (err, result) => {

            if (err) {

                return res.status(500).json({
                    success: false,
                    error: err
                });

            }

            res.status(200).json({
                success: true,
                data: result
            });

        }
    );

};




export const saveSettings = (req, res) => {

    SettingsModel.getSettings(
        (err, result) => {

            if (err) {

                return res.status(500).json(err);

            }

            if (result.length === 0) {

                SettingsModel.createSettings(
                    req.body,
                    (err2) => {

                        if (err2) {

                            return res.status(500).json(err2);

                        }

                        res.status(201).json({

                            success: true,
                            message: "Settings Created"

                        });

                    }
                );

            } else {

                SettingsModel.updateSettings(
                    req.body,
                    (err2) => {

                        if (err2) {

                            return res.status(500).json(err2);

                        }

                        res.json({

                            success: true,
                            message: "Settings Updated"

                        });

                    }
                );

            }

        }
    );

};