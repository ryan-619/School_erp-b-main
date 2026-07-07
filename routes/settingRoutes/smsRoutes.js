import express from "express";

import {
    getSms,
    createSms,
    updateSms,
    deleteSms,
    activateSms
} from "../../controllers/settingController/smsController.js";

const router = express.Router();


router.get(
    "/",
    getSms
);

router.post(
    "/",
    createSms
);

router.put(
    "/:id",
    updateSms
);

router.delete(
    "/:id",
    deleteSms
);

router.put(
    "/activate/:id",
    activateSms
);


export default router;