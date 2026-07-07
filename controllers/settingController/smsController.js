import SmsModel from "../../models/settingModels/smsModel.js";


export const getSms = (
    req,
    res
) => {

    SmsModel.getAll(
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



export const createSms = (
    req,
    res
) => {

    SmsModel.create(
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    error: err
                });
            }

            res.status(201).json({
                success: true,
                message: "Gateway Added",
                id: result.insertId
            });

        }
    );

};



export const updateSms = (
    req,
    res
) => {

    const { id } = req.params;

    SmsModel.update(
        id,
        req.body,
        (err) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    error: err
                });
            }

            res.json({
                success: true,
                message: "Gateway Updated"
            });

        }
    );

};



export const deleteSms = (
    req,
    res
) => {

    SmsModel.delete(
        req.params.id,
        (err) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    error: err
                });
            }

            res.json({
                success: true,
                message: "Gateway Deleted"
            });

        }
    );

};



export const activateSms = (
    req,
    res
) => {

    SmsModel.disableAll(
        (err) => {

            if (err) {
                return res.status(500).json(err);
            }

            SmsModel.activate(
                req.params.id,
                (err) => {

                    if (err) {
                        return res.status(500).json(err);
                    }

                    res.json({
                        success: true,
                        message: "Gateway Activated"
                    });

                }
            );

        }
    );

};