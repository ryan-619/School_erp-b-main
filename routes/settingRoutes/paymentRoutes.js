import express from 'express';
import { getAll, getById, create, update, remove, activatePayment } from '../../controllers/settingController/paymentController.js';

const router = express.Router();
router.get('/',              getAll);
router.post('/',             create);
router.put('/activate/:id',  activatePayment);
router.get('/:id',           getById);
router.put('/:id',           update);
router.delete('/:id',        remove);

export default router;
