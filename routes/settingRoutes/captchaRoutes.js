import express from "express";

import {
    getCaptchas,
    createCaptcha,
    updateCaptcha,
    updateCaptchaStatus,
    deleteCaptcha
} from "../../controllers/settingController/captchaController.js";

const router = express.Router();


router.get(
    "/",
    getCaptchas
);

router.post(
    "/",
    createCaptcha
);

router.put(
    "/:id",
    updateCaptcha
);

router.patch(
    "/status/:id",
    updateCaptchaStatus
);

router.delete(
    "/:id",
    deleteCaptcha
);

export default router;