import express from 'express';
import { getAll, create, update } from '../../controllers/settingController/fileTypeController.js';

const router = express.Router();
router.get('/',  getAll);
router.post('/', create);
router.put('/',  update);

export default router;
