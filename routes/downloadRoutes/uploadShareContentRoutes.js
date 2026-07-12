import express from 'express';
import { upload } from '../../middleware/contentUpload.js';
import { getAll, getById, create, update, remove } from '../../controllers/downloadController/uploadShareContentController.js';

const router = express.Router();

router.get('/',       getAll);
router.get('/:id',    getById);
router.post('/',      upload.single('file'), create);
router.put('/:id',    update);
router.delete('/:id', remove);

export default router;
