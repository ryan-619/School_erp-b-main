import express from 'express';
import { getAll, getById, create, update, remove, setActive, toggleRtl, updateStatus } from '../../controllers/settingController/languageController.js';

const router = express.Router();
router.get('/',             getAll);
router.get('/:id',          getById);
router.post('/',            create);
router.put('/:id',          update);
router.delete('/:id',       remove);
router.patch('/status/:id', updateStatus);
router.patch('/rtl/:id',    toggleRtl);
router.patch('/active/:id', setActive);

export default router;
