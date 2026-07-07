import express from "express";

import {
    getFileSettings,
    createFileSettings,
    updateFileSettings
} from "../../controllers/settingController/fileTypeController.js";

const router = express.Router();

router.get("/", getFileSettings);

router.post("/", createFileSettings);

router.put("/", updateFileSettings);

export default router;