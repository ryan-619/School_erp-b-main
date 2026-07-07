import express from "express";

import {
    getPayments,
    createPayment,
    updatePayment,
    deletePayment,
    activatePayment
} from "../../controllers/settingController/paymentController.js";

const router = express.Router();


router.get(
    "/",
    getPayments
);

router.post(
    "/",
    createPayment
);

router.put(
    "/:id",
    updatePayment
);

router.delete(
    "/:id",
    deletePayment
);

router.put(
    "/activate/:id",
    activatePayment
);


export default router;