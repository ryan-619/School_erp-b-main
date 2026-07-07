import express from "express";

import {
    getNotifications,
    getNotification,
    createNotification,
    updateNotification,
    deleteNotification
} from "../../controllers/settingController/notificationController.js";

const router = express.Router();


router.get(
    "/",
    getNotifications
);

router.get(
    "/:id",
    getNotification
);

router.post(
    "/",
    createNotification
);

router.put(
    "/:id",
    updateNotification
);

router.delete(
    "/:id",
    deleteNotification
);


export default router;