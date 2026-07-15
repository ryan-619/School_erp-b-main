import express from 'express';
import { getCmsSettings, saveCmsSettings } from '../../controllers/settingController/frontCmsController.js';

const router = express.Router();
router.get('/',  getCmsSettings);
router.post('/', saveCmsSettings);

export default router;
