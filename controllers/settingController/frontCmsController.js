import FrontCmsModel from "../../models/settingModels/frontCmsModel.js";


export const getFrontCms = (
    req,
    res
) => {

    FrontCmsModel.get(
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



export const saveFrontCms = (
    req,
    res
) => {

    FrontCmsModel.get(
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            if (
                result.length === 0
            ) {

                FrontCmsModel.create(
                    req.body,
                    (err) => {

                        if (err) {
                            return res.status(500).json(err);
                        }

                        res.status(201).json({
                            success: true,
                            message: "Front CMS created"
                        });

                    }
                );

            } else {

                FrontCmsModel.update(
                    req.body,
                    (err) => {

                        if (err) {
                            return res.status(500).json(err);
                        }

                        res.json({
                            success: true,
                            message: "Front CMS updated"
                        });

                    }
                );

            }

        }
    );

};