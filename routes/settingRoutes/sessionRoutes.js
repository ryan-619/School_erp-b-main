import express from "express";

import {
    getAllSessions,
    createSession,
    updateSession,
    deleteSession,
    activateSession,
} from "../../controllers/settingController/sessionController.js";

const router = express.Router();


router.get(
    "/",
    getAllSessions
);

router.post(
    "/",
    createSession
);

router.put(
    "/:id",
    updateSession
);

router.delete(
    "/:id",
    deleteSession
);

router.put(
    "/activate/:id",
    activateSession
);


export default router;