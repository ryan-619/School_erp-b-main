import express from "express";

import {
    getUsers,
    getUsersByType,
    createUser,
    updateUser,
    updateUserStatus,
    deleteUser
} from "../../controllers/settingController/userController.js";

const router =
    express.Router();


router.get(
    "/",
    getUsers
);

router.get(
    "/type/:type",
    getUsersByType
);

router.post(
    "/",
    createUser
);

router.put(
    "/:id",
    updateUser
);

router.patch(
    "/status/:id",
    updateUserStatus
);

router.delete(
    "/:id",
    deleteUser
);


export default router;