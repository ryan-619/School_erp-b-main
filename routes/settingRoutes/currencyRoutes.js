import express from 'express';
import { getAll, getById, create, update, remove, setBaseCurrency, updateStatus } from '../../controllers/settingController/currencyController.js';

const router = express.Router();
router.get('/',              getAll);
router.get('/:id',           getById);
router.post('/',             create);
router.put('/:id',           update);
router.delete('/:id',        remove);
router.patch('/status/:id',  updateStatus);
router.patch('/base/:id',    setBaseCurrency);

export default router;
