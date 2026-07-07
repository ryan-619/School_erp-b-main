import express from "express";

import {
    getSystemFields,
    getFieldsByType,
    createSystemField,
    updateSystemFieldStatus,
    deleteSystemField
} from "../../controllers/settingController/systemFieldController.js";

const router = express.Router();

router.get("/", getSystemFields);

router.get("/:type", getFieldsByType);

router.post("/", createSystemField);

router.patch("/status/:id", updateSystemFieldStatus);

router.delete("/:id", deleteSystemField);

export default router;