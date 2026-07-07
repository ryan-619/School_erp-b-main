import express from "express";

import {
    getModules,
    getModulesByType,
    createModule,
    updateModule,
    updateModuleStatus,
    deleteModule
} from "../../controllers/settingController/moduleController.js";

const router = express.Router();


router.get(
    "/",
    getModules
);

router.get(
    "/type/:type",
    getModulesByType
);

router.post(
    "/",
    createModule
);

router.put(
    "/:id",
    updateModule
);

router.patch(
    "/status/:id",
    updateModuleStatus
);

router.delete(
    "/:id",
    deleteModule
);


export default router;