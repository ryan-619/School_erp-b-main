import express from 'express';
import { getAll, getByType, getById, create, updateStatus, remove } from '../../controllers/settingController/systemFieldController.js';

const router = express.Router();
router.get('/',              getAll);
router.get('/type/:type',    getByType);
router.get('/:id',           getById);
router.post('/',             create);
router.patch('/status/:id',  updateStatus);
router.delete('/:id',        remove);

export default router;
