import express from "express";

import {
    getFrontCms,
    saveFrontCms
} from "../../controllers/settingController/frontCmsController.js";

const router = express.Router();


router.get(
    "/",
    getFrontCms
);

router.post(
    "/",
    saveFrontCms
);


export default router;