import express from 'express';
import { getAll, getByType, getById, create, update, remove, updateStatus } from '../../controllers/settingController/userController.js';

const router = express.Router();
router.get('/',              getAll);
router.get('/type/:type',    getByType);
router.get('/:id',           getById);
router.post('/',             create);
router.put('/:id',           update);
router.delete('/:id',        remove);
router.patch('/status/:id',  updateStatus);

export default router;
