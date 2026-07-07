import express from "express";

import {
    getCustomFields,
    getCustomField,
    createCustomField,
    updateCustomField,
    deleteCustomField
} from "../../controllers/settingController/customFieldController.js";

const router = express.Router();

router.get("/", getCustomFields);

router.get("/:id", getCustomField);

router.post("/", createCustomField);

router.put("/:id", updateCustomField);

router.delete("/:id", deleteCustomField);

export default router;