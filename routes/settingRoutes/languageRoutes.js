import express from "express";

import {
    getLanguages,
    createLanguage,
    updateLanguage,
    updateLanguageStatus,
    updateRTL,
    setActiveLanguage,
    deleteLanguage
} from "../../controllers/settingController/languageController.js";

const router = express.Router();


router.get(
    "/",
    getLanguages
);

router.post(
    "/",
    createLanguage
);

router.put(
    "/:id",
    updateLanguage
);

router.patch(
    "/status/:id",
    updateLanguageStatus
);

router.patch(
    "/rtl/:id",
    updateRTL
);

router.patch(
    "/active/:id",
    setActiveLanguage
);

router.delete(
    "/:id",
    deleteLanguage
);

export default router;