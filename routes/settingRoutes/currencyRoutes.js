import express from "express";

import {
    getCurrencies,
    createCurrency,
    updateCurrency,
    updateCurrencyStatus,
    setBaseCurrency,
    deleteCurrency
}
from "../../controllers/settingController/currencyController.js";

const router =
express.Router();


router.get(
    "/",
    getCurrencies
);

router.post(
    "/",
    createCurrency
);

router.put(
    "/:id",
    updateCurrency
);

router.patch(
    "/status/:id",
    updateCurrencyStatus
);

router.patch(
    "/base/:id",
    setBaseCurrency
);

router.delete(
    "/:id",
    deleteCurrency
);


export default router;