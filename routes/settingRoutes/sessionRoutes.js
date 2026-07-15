import express from 'express';
import { getAll, getById, create, update, remove, activateSession } from '../../controllers/settingController/sessionController.js';

const router = express.Router();
router.get('/',              getAll);
router.post('/',             create);
router.put('/activate/:id',  activateSession);
router.get('/:id',           getById);
router.put('/:id',           update);
router.delete('/:id',        remove);

export default router;
