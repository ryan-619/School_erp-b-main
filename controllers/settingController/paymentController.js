import PaymentModel from "../../models/settingModels/paymentModel.js";


export const getPayments = (
    req,
    res
) => {

    PaymentModel.getAll(
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



export const createPayment = (
    req,
    res
) => {

    PaymentModel.create(
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
                insertId: result.insertId
            });

        }
    );

};



export const updatePayment = (
    req,
    res
) => {

    const { id } = req.params;

    PaymentModel.update(
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



export const deletePayment = (
    req,
    res
) => {

    PaymentModel.delete(
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



export const activatePayment = (
    req,
    res
) => {

    PaymentModel.disableAll(
        (err) => {

            if (err) {
                return res.status(500).json(err);
            }

            PaymentModel.activate(
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