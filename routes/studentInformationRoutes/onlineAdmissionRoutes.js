import express from 'express';
import { upload } from '../../middleware/contentUpload.js';
import { getAll, getById, create, update, remove } from '../../controllers/studentInfromationController/onlineAdmissionController.js';

const router = express.Router();

router.get('/all',  getAll);
router.get('/:id',  getById);
router.post('/add', upload.fields([
  { name: 'guardian_photo', maxCount: 1 },
  { name: 'documents', maxCount: 5 }
]), create);
router.put('/:id',   update);
router.delete('/:id', remove);

export default router;
