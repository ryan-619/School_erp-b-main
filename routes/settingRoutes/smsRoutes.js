import express from 'express';
import { getAll, getById, create, update, remove, activateSms } from '../../controllers/settingController/smsController.js';

const router = express.Router();
router.get('/',              getAll);
router.post('/',             create);
router.put('/activate/:id',  activateSms);
router.get('/:id',           getById);
router.put('/:id',           update);
router.delete('/:id',        remove);

export default router;
